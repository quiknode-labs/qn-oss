export const emptyPageInfo = {
  endCursor: null,
  hasNextPage: false,
  hasPreviousPage: false,
  startCursor: null,
};

export function hasOwnProperty<T, K extends PropertyKey>(
  obj: T,
  prop: K
): obj is T & Record<K, unknown> {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

export function weiToGwei(wei: number): number {
  return +(wei / 1e9).toFixed(2);
}
