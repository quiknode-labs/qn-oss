export interface Connection<T> {
  edges: {
    node: T;
  }[];
}
