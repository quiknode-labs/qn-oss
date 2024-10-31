import {
    Transaction, 
    Keypair, 
    PublicKey, 
    SendOptions 
} from '@solana/web3.js';
import { TransactionArgsBase } from 'solana/shared';

interface TransactionBaseArgsV1 extends TransactionArgsBase {
    transaction: Transaction;
}

export interface PrepareTransactionArgsV1 extends TransactionBaseArgsV1 {
    payerPublicKey: PublicKey;
}

export interface SendTransactionArgsV1 extends TransactionBaseArgsV1 {
    keyPair: Keypair;
    sendTransactionOptions?: SendOptions;
}

export interface PrepareTransactionResponseV1 extends TransactionArgsBase {
    transaction: Transaction;
}
