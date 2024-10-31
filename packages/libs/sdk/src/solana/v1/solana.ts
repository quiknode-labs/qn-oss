import { BaseSolanaClientArgs, EstimatePriorityFeesParams, PriorityFeeLevels, PriorityFeeRequestPayload, PriorityFeeResponseData, SolanaClient } from "solana/shared";
import { PrepareTransactionArgsV1, PrepareTransactionResponseV1, SendTransactionArgsV1 } from "./types";
import { ComputeBudgetProgram, Connection, PublicKey, TransactionInstruction, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { DEFAULTS } from "solana/shared/constants";

export class SolanaV1 implements SolanaClient {
    readonly endpointUrl: string;
    readonly connection: Connection;
    constructor({ endpointUrl }: BaseSolanaClientArgs) {
        this.endpointUrl = endpointUrl;
        this.connection = new Connection(endpointUrl);
    }
    /**
     * Sends a transaction with a dynamically generated priority fee based on the current network 
     * conditions and compute units needed by the transaction.
     */
    async sendSmartTransaction(args: SendTransactionArgsV1): Promise<string> {
        const {
            transaction,
            keyPair,
            feeLevel = DEFAULTS.FEE_LEVEL,
            sendTransactionOptions = {},
            priorityFeeParams,
            computeUnitMargin
        } = args;
        const { transaction: smartTransaction } = await this.prepareSmartTransaction({
            transaction,
            payerPublicKey: keyPair.publicKey,
            feeLevel,
            priorityFeeParams,
            computeUnitMargin
        });
        smartTransaction.sign(keyPair);

        const hash = await this.connection.sendRawTransaction(
            transaction.serialize(),
            { skipPreflight: true, ...sendTransactionOptions }
        );

        return hash;
    }

    async prepareSmartTransaction(args: PrepareTransactionArgsV1): Promise<PrepareTransactionResponseV1> {
        const {
            transaction,
            payerPublicKey,
            feeLevel = DEFAULTS.FEE_LEVEL,
            priorityFeeParams = DEFAULTS.PRIORITY_FEE_PARAMS,
            computeUnitMargin = DEFAULTS.COMPUTE_MARGIN
        } = args;

        // Send simulation with placeholders so the value calculated is accurate
        // placeholders kept low to avoid InsufficientFundsForFee error with the high cu budget limit
        const simulationInstructions = [
            ComputeBudgetProgram.setComputeUnitPrice({
                microLamports: DEFAULTS.PLACEHOLDER_PRIORITY_FEE,
            }),
            ComputeBudgetProgram.setComputeUnitLimit({ units: DEFAULTS.PLACEHOLDER_COMPUTE_UNIT }),
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
                this.createDynamicPriorityFeeInstruction(feeLevel, priorityFeeParams),
                this.connection.getLatestBlockhash(),
            ]);

        transaction.add(computeUnitPriceInstruction);
        if (units) {
            units = Math.ceil(units * computeUnitMargin);
            transaction.add(ComputeBudgetProgram.setComputeUnitLimit({ units }));
        }
        transaction.recentBlockhash = recentBlockhash.blockhash;

        return { transaction };
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
            throw new Error(`Failed to simulate transaction ${simulation.value.err}`);
        }
        return simulation.value.unitsConsumed;
    }

    private async createDynamicPriorityFeeInstruction(
        feeType: PriorityFeeLevels,
        priorityFeeParams: EstimatePriorityFeesParams
    ) {
        const { result } = await this.fetchEstimatePriorityFees(priorityFeeParams);
        const priorityFee = result.per_compute_unit[feeType];
        const priorityFeeInstruction = ComputeBudgetProgram.setComputeUnitPrice({
            microLamports: priorityFee,
        });
        return priorityFeeInstruction;
    }

    async fetchEstimatePriorityFees(
        args: EstimatePriorityFeesParams = DEFAULTS.PRIORITY_FEE_PARAMS
    ): Promise<PriorityFeeResponseData> {
        const payload: PriorityFeeRequestPayload = {
            method: 'qn_estimatePriorityFees',
            params: args,
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
}
