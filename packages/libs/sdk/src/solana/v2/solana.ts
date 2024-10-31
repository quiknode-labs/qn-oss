import { BaseSolanaClientArgs, DEFAULTS, EstimatePriorityFeesParams, PriorityFeeLevels, PriorityFeeResponseData, SolanaClient } from "solana/shared";
import { PrepareTransactionArgsV2, PrepareTransactionResponseV2, PriorityFeeApi, SendTransactionArgsV2 } from "./types";
import {
    Rpc,
    createRpc,
    pipe,
    createTransactionMessage,
    setTransactionMessageLifetimeUsingBlockhash,
    createSolanaRpc,
    prependTransactionMessageInstruction,
    getComputeUnitEstimateForTransactionMessageFactory,
    Blockhash,
    CompilableTransactionMessage,
    BaseTransactionMessage,
    setTransactionMessageFeePayer,
    Address,
    signTransaction,
    appendTransactionMessageInstructions,
    compileTransaction,
    assertTransactionIsFullySigned,
    sendAndConfirmTransactionFactory,
    createSolanaRpcSubscriptions,
    getSignatureFromTransaction,
    SolanaRpcApi,
    RpcSubscriptions,
    SolanaRpcSubscriptionsApi,
    RpcTransport,
    createDefaultRpcTransport,
    RpcRequest,
    createJsonRpcApi,
    assertIsTransactionMessageWithBlockhashLifetime
} from "@solana/web3.js-v2";
import {
    getSetComputeUnitLimitInstruction,
    getSetComputeUnitPriceInstruction,
} from "@solana-program/compute-budget";
import { DEFAULTS_V2 } from "./constants";


export class SolanaV2 implements SolanaClient {
    readonly endpointUrl: string;
    private readonly solanaCore: Rpc<SolanaRpcApi>;
    private readonly priorityFeeApi: Rpc<PriorityFeeApi>;
    private readonly solanaSubscriptions: RpcSubscriptions<SolanaRpcSubscriptionsApi>;

    constructor({ endpointUrl, wssEndpointUrl }: BaseSolanaClientArgs) {
        this.endpointUrl = endpointUrl;
        if (!wssEndpointUrl) {
            const httpProviderUrl = new URL(endpointUrl);
            httpProviderUrl.protocol = "wss:";
            wssEndpointUrl = httpProviderUrl.toString();
        }
        this.solanaCore = createSolanaRpc(endpointUrl);
        this.priorityFeeApi = this.createPriorityFeeApi(endpointUrl);
        this.solanaSubscriptions = createSolanaRpcSubscriptions(wssEndpointUrl);
    }

    private createPriorityFeeApi(endpoint: string): Rpc<PriorityFeeApi> {
        const api = createJsonRpcApi<PriorityFeeApi>({
            requestTransformer: (request: RpcRequest<any>) => request.params[0],
            responseTransformer: (response: any) => response,

        });
        const transport = this.createQuickNodeTransport(endpoint);
        return createRpc({ api, transport });
    }

    private createQuickNodeTransport(endpoint: string): RpcTransport {
        const jsonRpcTransport = createDefaultRpcTransport({ url: endpoint });
        return async <TResponse>(...args: Parameters<RpcTransport>): Promise<TResponse> => {
            return await jsonRpcTransport(...args);
        };
    }

    private async estimateComputeUnits(sampleMessage: CompilableTransactionMessage, computeUnitMargin: number): Promise<number> {
        const computeUnitsEstimator = getComputeUnitEstimateForTransactionMessageFactory({
            rpc: this.solanaCore
        });
        const estimatedComputeUnits = await computeUnitsEstimator(sampleMessage);
        return Math.ceil(estimatedComputeUnits * computeUnitMargin);
    }

    async fetchEstimatePriorityFees(args: EstimatePriorityFeesParams = {}): Promise<PriorityFeeResponseData> {
        const response = await this.priorityFeeApi.qn_estimatePriorityFees(args).send();
        return response;
    }

    private async getPriorityFeeMicroLamports(priorityFeeParams: EstimatePriorityFeesParams, priorityFeeLevel: PriorityFeeLevels): Promise<number> {
        const { result: priorityFees } = await this.fetchEstimatePriorityFees(priorityFeeParams);
        return priorityFees.per_compute_unit[priorityFeeLevel];
    }

    private createTransactionMessageWithInstructions(
        feePayerAddress: Address<string>,
        instructions: ReadonlyArray<BaseTransactionMessage['instructions'][number]>,
        blockHash: Readonly<{
            blockhash: Blockhash;
            lastValidBlockHeight: bigint;
        }> = DEFAULTS_V2.PLACEHOLDER_BLOCKHASH,
        computeUnits: number = DEFAULTS.PLACEHOLDER_COMPUTE_UNIT,
        priorityFeeMicroLamports: number = DEFAULTS.PLACEHOLDER_PRIORITY_FEE,
    ): CompilableTransactionMessage {
        return pipe(
            createTransactionMessage({ version: 0 }),
            (tx) => setTransactionMessageFeePayer(feePayerAddress, tx),
            (tx) => setTransactionMessageLifetimeUsingBlockhash(blockHash, tx),
            (tx) => prependTransactionMessageInstruction(
                getSetComputeUnitLimitInstruction({ units: computeUnits }),
                tx
            ),
            (tx) => prependTransactionMessageInstruction(
                getSetComputeUnitPriceInstruction({ microLamports: priorityFeeMicroLamports }),
                tx
            ),
            (tx) => appendTransactionMessageInstructions(instructions, tx)
        );
    }

    async prepareSmartTransaction({
        instructions,
        feePayerAddress,
        priorityFeeParams = {},
        feeLevel = DEFAULTS.FEE_LEVEL,
        computeUnitMargin = DEFAULTS.COMPUTE_MARGIN,
        blockHashCommitment = "confirmed"
    }: PrepareTransactionArgsV2
    ): Promise<PrepareTransactionResponseV2> {
        const sampleMessage = this.createTransactionMessageWithInstructions(
            feePayerAddress,
            instructions,
        );
        const estimatedComputeUnits = await this.estimateComputeUnits(sampleMessage, computeUnitMargin);
        const priorityFeeMicroLamports = await this.getPriorityFeeMicroLamports(priorityFeeParams, feeLevel);

        const { value: latestBlockhash } = await this.solanaCore
            .getLatestBlockhash({ commitment: blockHashCommitment })
            .send();
        const message = this.createTransactionMessageWithInstructions(
            feePayerAddress,
            instructions,
            latestBlockhash,
            estimatedComputeUnits,
            priorityFeeMicroLamports
        )
        assertIsTransactionMessageWithBlockhashLifetime(message);
        const transaction = compileTransaction(message);
        return { transaction };
    }

    async sendSmartTransaction({
        instructions,
        signer,
        priorityFeeParams = {},
        feeLevel = DEFAULTS.FEE_LEVEL,
        blockHashCommitment = "confirmed",
        confirmCommitment = "confirmed",
        computeUnitMargin = DEFAULTS.COMPUTE_MARGIN,
    }: SendTransactionArgsV2): Promise<string> {
        const sendAndConfirmTransaction = sendAndConfirmTransactionFactory({
            rpc: this.solanaCore,
            rpcSubscriptions: this.solanaSubscriptions
        });

        const { transaction: compiledTransaction } = await this.prepareSmartTransaction({
            instructions,
            feePayerAddress: signer.address,
            priorityFeeParams,
            feeLevel,
            computeUnitMargin,
            blockHashCommitment
        })
        const signedTransaction = await signTransaction([signer.keyPair], compiledTransaction);
        assertTransactionIsFullySigned(signedTransaction);
        const signature = getSignatureFromTransaction(signedTransaction);

        try {
            await sendAndConfirmTransaction(
                signedTransaction,
                { commitment: confirmCommitment }
            );
            return signature;
        } catch (error) {
            throw error;
        }
    }
}