export interface NonScalarNode {
  [key: string]: any;
  edges?: {
    node: {
      [key: string]: NonScalarNode | string | number | boolean;
    };
  }[];
}

export const removeNodesAndEdges = (
  data: NonScalarNode
): Record<string, any> => {
  if (
    typeof data === 'object' &&
    !Array.isArray(data) &&
    !(data instanceof Function)
  ) {
    if (data?.edges) {
      return data.edges.map((item) => {
        if (item.node) {
          const obj: {
            [key: string]: NonScalarNode | string | number | boolean;
          } = {};
          Object.keys(item.node).forEach((o) => {
            const nodeParam = item.node[o];
            if (
              typeof nodeParam === 'string' ||
              typeof nodeParam === 'boolean' ||
              typeof nodeParam === 'number'
            ) {
              obj[o] = nodeParam;
            } else {
              obj[o] = removeNodesAndEdges(nodeParam);
            }
          });
          return obj;
        }
        return item;
      });
    }

    const keys = Object.keys(data);
    const output: { [key: string]: any } = {};
    keys.map((key) => {
      const value = data[key];
      if (
        value &&
        (value.edges || value.total || value.pageInfo || value.breadcrumbs)
      ) {
        if (value.breadcrumbs) output[`${key}Breadcrumbs`] = value.breadcrumbs;
        if (value.pageInfo) output[`${key}PageInfo`] = value.pageInfo;
        if (value.total) output[`${key}Total`] = value.total;
        if (value.viewport) output[`${key}Viewport`] = value.viewport;
        output[key] = value.edges.map((item: any) => {
          if (item.node) {
            return removeNodesAndEdges(item.node);
          }
          return item;
        });
      } else {
        output[key] = removeNodesAndEdges(value);
      }
    });

    return output;
  }

  if (Array.isArray(data)) {
    return data.map((item) => removeNodesAndEdges(item));
  }

  return data;
};
