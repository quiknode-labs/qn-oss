// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  ComputeBudgetProgram,
  Connection,
  TransactionInstruction,
  PublicKey,
  TransactionMessage,
  VersionedTransaction,
} from '@solana/web3.js';
import {
  type EstimatePriorityFeesParams,
  type PriorityFeeRequestPayload,
  type PriorityFeeResponseData,
  type PriorityFeeLevels,
  type SolanaClientArgs,
  type SendSmartTransactionArgs,
  type PrepareSmartTransactionArgs,
} from './types';
import { getClientHeaders } from '../lib/helpers';

export class Solana {
  readonly endpointUrl: string;
  readonly connection: Connection;

  constructor({ endpointUrl }: SolanaClientArgs) {
    const clientHeaders = getClientHeaders();
    this.endpointUrl = endpointUrl;
    this.connection = new Connection(endpointUrl, {
      httpHeaders: clientHeaders,
    });
  }

  /**
   * Sends a transaction with a dynamically generated priority fee based on the current network conditions and compute units needed by the transaction.
   */
  async sendSmartTransaction(args: SendSmartTransactionArgs) {
    const {
      transaction,
      keyPair,
      feeLevel = 'medium',
      sendTransactionOptions = {},
    } = args;
    const smartTransaction = await this.prepareSmartTransaction({
      transaction,
      payerPublicKey: keyPair.publicKey,
      feeLevel,
    });
    smartTransaction.sign(keyPair);

    const hash = await this.connection.sendRawTransaction(
      transaction.serialize(),
      { skipPreflight: true, ...sendTransactionOptions }
    );

    return hash;
  }

  /**
   * Prepares a transaction to be sent with a dynamically generated priority fee based
   * on the current network conditions. It adds a `setComputeUnitPrice` instruction to the transaction
   * and simulates the transaction to estimate the number of compute units it will consume.
   * The returned transaction still needs to be signed and sent to the network.
   */
  async prepareSmartTransaction(args: PrepareSmartTransactionArgs) {
    const { transaction, payerPublicKey, feeLevel = 'medium' } = args;

    // Send simulation with placeholders so the value calculated is accurate
    // placeholders kept low to avoid InsufficientFundsForFee error with the high cu budget limit
    const simulationInstructions = [
      ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 1,
      }),
      ComputeBudgetProgram.setComputeUnitLimit({ units: 1_400_000 }),
      ...transaction.instructions,
    ];

    // eslint-disable-next-line prefer-const
    let [units, computeUnitPriceInstruction, recentBlockhash] =
      await Promise.all([
        this.getSimulationUnits(
          this.connection,
          simulationInstructions,
          payerPublicKey
        ),
        this.createDynamicPriorityFeeInstruction(feeLevel),
        this.connection.getLatestBlockhash(),
      ]);

    transaction.add(computeUnitPriceInstruction);
    if (units) {
      units = Math.ceil(units * 1.05); // margin of error
      transaction.add(ComputeBudgetProgram.setComputeUnitLimit({ units }));
    }
    transaction.recentBlockhash = recentBlockhash.blockhash;

    return transaction;
  }

  // Get the priority fee averages based on fee data from the latest blocks
  async fetchEstimatePriorityFees(
    args: EstimatePriorityFeesParams = {}
  ): Promise<PriorityFeeResponseData> {
    const payload: PriorityFeeRequestPayload = {
      method: 'qn_estimatePriorityFees',
      params: { api_version: 2, ...args },
      id: 1,
      jsonrpc: '2.0',
    };

    const response = await fetch(this.endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          `The RPC method qn_estimatePriorityFees was not found on your endpoint! Your endpoint likely does not have the Priority Fee API add-on installed. Please visit https://marketplace.quicknode.com/add-on/solana-priority-fee to install the Priority Fee API and use this method to send your transactions with priority fees calculated with real-time data.`
        );
      }
      throw new Error('Failed to fetch priority fee estimates');
    }

    const data: PriorityFeeResponseData = await response.json();
    return data;
  }

  private async createDynamicPriorityFeeInstruction(
    feeType: PriorityFeeLevels = 'medium'
  ) {
    const { result } = await this.fetchEstimatePriorityFees({});
    const priorityFee =
      feeType === 'recommended'
        ? result.recommended
        : result.per_compute_unit[feeType];

    const priorityFeeInstruction = ComputeBudgetProgram.setComputeUnitPrice({
      microLamports: priorityFee,
    });
    return priorityFeeInstruction;
  }

  private async getSimulationUnits(
    connection: Connection,
    instructions: TransactionInstruction[],
    publicKey: PublicKey
  ): Promise<number | undefined> {
    const testVersionedTxn = new VersionedTransaction(
      new TransactionMessage({
        instructions: instructions,
        payerKey: publicKey,
        recentBlockhash: PublicKey.default.toString(), // just a placeholder
      }).compileToV0Message()
    );

    const simulation = await connection.simulateTransaction(testVersionedTxn, {
      replaceRecentBlockhash: true,
      sigVerify: false,
    });
    if (simulation.value.err) {
      console.error('Simulation error:', simulation.value.err);
      throw new Error(
        `Failed to simulate transaction ${JSON.stringify(simulation.value.err)}`
      );
    }
    return simulation.value.unitsConsumed;
  }
}
