export interface Connection<T> {
  pageInfo: PageInfo;
  edges: {
    node: T;
  }[];
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface PaginationArgs {
  first?: number;
  after?: string;
}

export type Scalar = string | number | boolean;

export type LogEvents = 'TRANSFER' | 'ORDER' | 'MINT';
