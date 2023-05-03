import { CodegenPageInfo } from '../graphql/generatedTypes';

interface Edge {
  __typename?: 'TokenEdge';
  cursor?: string;
  node?: Record<string | number | symbol, ResultInput>;
}

interface Connection {
  pageInfo?: CodegenPageInfo;
  edges?: Edge[];
  total?: number;
  breadcrumbs?: string;
  viewport?: string;
}

interface RemoveNodesAndEdgesOptions {
  keepTypename?: boolean;
}

interface ResultInput {
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
  const keepTypename = options?.keepTypename || false;

  keys
    .filter((key) => {
      if (keepTypename) return true;
      return key !== '__typename';
    })
    .forEach((key: string) => {
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
          const { __typename, ...pageInfoRest } = value.pageInfo;
          output[`${key}PageInfo`] = pageInfoRest;
        }

        return (output[key] = value.edges?.map((item: Edge) => {
          if (item.node) {
            // Don't pass options back in so we only remove the __typename from top-level
            // We may need to change this in the future if we want to keep the __typename for nested nodes
            return removeNodesAndEdges(item.node);
          }
          return item;
        }));
      }

      return (output[key] = removeNodesAndEdges(value as ResultInput, options));
    });

  return output as TResultOutput;
}
