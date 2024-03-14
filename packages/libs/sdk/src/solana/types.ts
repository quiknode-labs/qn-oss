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

export interface EstimatePriorityFeesParams {
  // The number of blocks to consider for the fee estimate
  last_n_blocks?: number;
  // The program account to use for fetching the local estimate (e.g., Jupiter: JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4)
  account?: string;
}
