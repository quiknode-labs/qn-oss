type PercentileRangeUnion =
    | '0'
    | '5'
    | '10'
    | '15'
    | '20'
    | '25'
    | '30'
    | '35'
    | '40'
    | '45'
    | '50'
    | '55'
    | '60'
    | '65'
    | '70'
    | '75'
    | '80'
    | '85'
    | '90'
    | '95'
    | '100';

export type PriorityFeeLevels = 'low' | 'medium' | 'high' | 'extreme';

export interface PriorityFeeRequestPayload {
    method: string;
    params: {
        last_n_blocks?: number;
        account?: string;
    };
    id: number;
    jsonrpc: string;
}

export interface PriorityFeeEstimates {
    extreme: number;
    high: number;
    low: number;
    medium: number;
    percentiles: {
        [key in PercentileRangeUnion]: number;
    };
}

export interface PriorityFeeResponseData {
    jsonrpc: string;
    result: {
        context: {
            slot: number;
        };
        per_compute_unit: PriorityFeeEstimates;
        per_transaction: PriorityFeeEstimates;
    };
    id: number;
}

export enum PriorityFeeApiVersion {
    V1 = 1,
    V2 = 2,
}

export interface EstimatePriorityFeesParams {
    // The number of blocks to consider for the fee estimate
    last_n_blocks?: number;
    // The program account to use for fetching the local estimate (e.g., Jupiter: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4)
    account?: string;
    // API version
    api_version?: PriorityFeeApiVersion;
}

export interface SolanaClientArgs {
    endpointUrl: string;
}

export interface BaseSolanaClientArgs {
    endpointUrl: string;
    wssEndpointUrl?: string;
}

export enum ClientVersion {
    V1 = 'v1',
    V2 = 'v2'
}

export interface TransactionArgsBase {
    feeLevel?: PriorityFeeLevels;
    priorityFeeParams?: EstimatePriorityFeesParams;
    computeUnitMargin?: number;
}

export interface PrepareTransactionResponseBase { }

export interface SolanaClient {
    readonly endpointUrl: string;
    fetchEstimatePriorityFees(args?: EstimatePriorityFeesParams): Promise<PriorityFeeResponseData>;
    sendSmartTransaction(args: TransactionArgsBase): Promise<string>;
    prepareSmartTransaction(args: TransactionArgsBase): Promise<PrepareTransactionResponseBase>;
}


