import { CodegenPageInfo } from '../graphql/generatedTypes';

interface Edge {
  __typename?: 'TokenEdge';
  cursor?: string;
  node?: Record<string | number | symbol, ResultInput>;
}

export interface Connection {
  pageInfo?: CodegenPageInfo;
  edges?: Edge[];
  total?: number;
  breadcrumbs?: string;
  viewport?: string;
}

interface RemoveNodesAndEdgesOptions {
  keepTypename?: boolean;
}

export interface ResultInput {
  [index: string | number | symbol]: Connection | ResultInput | unknown;
}

export type ResultOutput = Record<string | number | symbol, any>;

function isConnection(object: unknown): object is Connection {
  return (
    typeof object === 'object' &&
    !!object &&
    ('edges' in object ||
      'total' in object ||
      'pageInfo' in object ||
      'breadcrumbs' in object)
  );
}

export function removeNodesAndEdges<
  TInput extends ResultInput,
  TResultOutput extends ResultOutput
>(data: TInput, options?: RemoveNodesAndEdgesOptions): TResultOutput {
  const keys = Object.keys(data);
  const output: ResultOutput = {};
  const keepTypename = options?.keepTypename || true;

  keys
    .filter((key) => {
      if (keepTypename) return true;
      return key !== '__typename';
    })
    .forEach((key: string) => {
      console.log('key', key);
      const value = data[key];

      if (
        typeof value === 'string' ||
        typeof value === 'boolean' ||
        typeof value === 'number' ||
        value === null ||
        value === undefined
      ) {
        return (output[key] = value);
      }

      if (Array.isArray(value)) {
        // An array can just be an array of strings and not edges and nodes
        if (value.every((val) => typeof val === 'string')) {
          return (output[key] = value);
        }
        return (output[key] = value.map((item) =>
          removeNodesAndEdges(item, options)
        ));
      }

      if (isConnection(value)) {
        if (value.breadcrumbs) output[`${key}Breadcrumbs`] = value.breadcrumbs;
        if (value.total) output[`${key}Total`] = value.total;
        if (value.viewport) output[`${key}Viewport`] = value.viewport;
        if (value.pageInfo) {
          const { ...pageInfoRest } = value.pageInfo;
          output[`${key}PageInfo`] = pageInfoRest;
        }

        return (output[key] = value.edges?.map((item: Edge) => {
          if (item.node) {
            return removeNodesAndEdges(item.node, options);
          }
          return item;
        }));
      }

      return (output[key] = removeNodesAndEdges(value as ResultInput, options));
    });

  return output as TResultOutput;
}
