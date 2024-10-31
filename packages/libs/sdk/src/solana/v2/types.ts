import { Address, BaseTransactionMessage, Commitment, KeyPairSigner, SignaturesMap, TransactionMessageBytes, TransactionWithBlockhashLifetime } from "@solana/web3.js-v2";
import { BaseSolanaClientArgs, EstimatePriorityFeesParams, PriorityFeeResponseData, TransactionArgsBase } from "solana/shared";

export type PriorityFeeApi = {
    qn_estimatePriorityFees(params: EstimatePriorityFeesParams): PriorityFeeResponseData;
}

interface TransactionBaseArgsV2 extends TransactionArgsBase {
    instructions: ReadonlyArray<BaseTransactionMessage['instructions'][number]>;
    blockHashCommitment?: Commitment;
}

export interface PrepareTransactionArgsV2 extends TransactionBaseArgsV2 {
    feePayerAddress: Address<string>;
}

export interface SendTransactionArgsV2 extends TransactionBaseArgsV2 {
    signer: KeyPairSigner<string>;
    confirmCommitment?: Commitment;
}

export interface PrepareTransactionResponseV2 extends TransactionArgsBase {
    transaction: Readonly<Readonly<{
        messageBytes: TransactionMessageBytes;
        signatures: SignaturesMap;
    }> & TransactionWithBlockhashLifetime>
}
