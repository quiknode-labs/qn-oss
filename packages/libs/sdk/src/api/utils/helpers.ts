export const emptyPageInfo = {
  endCursor: null,
  hasNextPage: false,
  hasPreviousPage: false,
  startCursor: null,
};

export function weiToGwei(wei: number): number {
  return +(wei / 1e9).toFixed(2);
}

export type SimplifyType<T> = T extends object
  ? { [K in keyof T]: SimplifyType<T[K]> }
  : T;
