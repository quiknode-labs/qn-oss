// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  Transaction,
  Keypair,
  ComputeBudgetProgram,
  Connection,
  TransactionInstruction,
  PublicKey,
  TransactionMessage,
  VersionedTransaction,
  SendOptions,
} from '@solana/web3.js';
import {
  type EstimatePriorityFeesParams,
  type PriorityFeeRequestPayload,
  type PriorityFeeResponseData,
  type PriorityFeeLevels,
  type SolanaClientArgs,
} from './types';

export class Solana {
  readonly endpointUrl: string;
  readonly connection: Connection;

  constructor({ endpointUrl }: SolanaClientArgs) {
    this.endpointUrl = endpointUrl;
    this.connection = new Connection(endpointUrl);
  }

  /**
   * Sends a transaction with a dynamically generated priority fee based on the current network conditions and compute units needed by the transaction.
   */
  async sendSmartTransaction(
    transaction: Transaction,
    keyPair: Keypair,
    feeLevel: PriorityFeeLevels = 'medium',
    sendTransactionOptions?: SendOptions
  ) {
    const smartTransaction = await this.prepareSmartTransaction(
      transaction,
      keyPair.publicKey,
      feeLevel
    );
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
  async prepareSmartTransaction(
    transaction: Transaction,
    payerPublicKey: PublicKey,
    feeLevel: PriorityFeeLevels = 'medium'
  ) {
    const computeUnitPriceInstruction =
      await this.createDynamicPriorityFeeInstruction(feeLevel);
    const allInstructions = [
      ...transaction.instructions,
      computeUnitPriceInstruction,
    ];

    // eslint-disable-next-line prefer-const
    let [units, recentBlockhash] = await Promise.all([
      this.getSimulationUnits(
        this.connection,
        allInstructions,
        payerPublicKey,
        feeLevel
      ),
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

  private async createDynamicPriorityFeeInstruction(
    feeType: PriorityFeeLevels = 'medium'
  ) {
    const { result } = await this.fetchEstimatePriorityFees({});
    const priorityFee = result.per_compute_unit[feeType];
    const priorityFeeInstruction = ComputeBudgetProgram.setComputeUnitPrice({
      microLamports: priorityFee,
    });
    return priorityFeeInstruction;
  }

  private async fetchEstimatePriorityFees({
    last_n_blocks = 100,
    account = undefined,
  }: EstimatePriorityFeesParams): Promise<PriorityFeeResponseData> {
    const params: { last_n_blocks?: number; account?: string } = {};
    if (last_n_blocks !== undefined) {
      params.last_n_blocks = last_n_blocks;
    }
    if (account !== undefined) {
      params.account = account;
    }

    const payload: PriorityFeeRequestPayload = {
      method: 'qn_estimatePriorityFees',
      params,
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

  private async getSimulationUnits(
    connection: Connection,
    instructions: TransactionInstruction[],
    publicKey: PublicKey,
    feeLevel: PriorityFeeLevels
  ): Promise<number | undefined> {
    const computeUnitPriceInstruction =
      await this.createDynamicPriorityFeeInstruction(feeLevel);
    const testInstructions = [...instructions, computeUnitPriceInstruction];

    const testVersionedTxn = new VersionedTransaction(
      new TransactionMessage({
        instructions: testInstructions,
        payerKey: publicKey,
        recentBlockhash: PublicKey.default.toString(), // just a placeholder
      }).compileToV0Message()
    );

    const simulation = await connection.simulateTransaction(testVersionedTxn, {
      replaceRecentBlockhash: true,
      sigVerify: false,
    });
    if (simulation.value.err) {
      return undefined;
    }
    return simulation.value.unitsConsumed;
  }
}
