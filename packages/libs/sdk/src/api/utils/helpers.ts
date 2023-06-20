export const emptyPageInfo = {
  endCursor: null,
  hasNextPage: false,
  hasPreviousPage: false,
  startCursor: null,
};

export function weiToGwei(wei: number): number {
  return +(wei / 1e9).toFixed(2);
}
