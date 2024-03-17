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

  async sendSmartTransaction(
    transaction: Transaction,
    keyPair: Keypair,
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
        keyPair.publicKey
      ),
      this.connection.getLatestBlockhash(),
    ]);

    transaction.add(computeUnitPriceInstruction);
    if (units) {
      units = Math.ceil(units * 1.05); // margin of error
      transaction.add(ComputeBudgetProgram.setComputeUnitLimit({ units }));
    }
    transaction.feePayer = keyPair.publicKey;
    transaction.recentBlockhash = recentBlockhash.blockhash;
    transaction.sign(keyPair);

    const hash = await this.connection.sendRawTransaction(
      transaction.serialize(),
      { skipPreflight: true, maxRetries: 0 }
    );

    return hash;
  }

  private async fetchEstimatePriorityFees({
    last_n_blocks = 10,
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

  private async getSimulationUnits(
    connection: Connection,
    instructions: TransactionInstruction[],
    payer: PublicKey
  ): Promise<number | undefined> {
    const testInstructions = [
      ComputeBudgetProgram.setComputeUnitLimit({ units: 1_400_000 }),
      ...instructions,
    ];

    const testVersionedTxn = new VersionedTransaction(
      new TransactionMessage({
        instructions: testInstructions,
        payerKey: payer,
        recentBlockhash: PublicKey.default.toString(),
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
