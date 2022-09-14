/**
 * @todo implement generic typing
 */
export const removeNodesAndEdges = (data: any): any | any[] => {
  const keys = Object.keys(data);
  const output: { [key: string]: any } = {};

  keys
    .filter((key) => key !== '__typename')
    .forEach((key) => {
      const value = data[key];
      if (
        typeof value === 'string' ||
        typeof value === 'boolean' ||
        typeof value === 'number' ||
        value === null
      ) {
        return (output[key] = value);
      }

      if (Array.isArray(value)) {
        return (output[key] = value.map((item) => removeNodesAndEdges(item)));
      }

      if (
        value &&
        (value.edges || value.total || value.pageInfo || value.breadcrumbs)
      ) {
        if (value.breadcrumbs) output[`${key}Breadcrumbs`] = value.breadcrumbs;
        if (value.total) output[`${key}Total`] = value.total;
        if (value.viewport) output[`${key}Viewport`] = value.viewport;
        if (value.pageInfo) {
          const { __typename, ...pageInfoRest } = value.pageInfo;
          output[`${key}PageInfo`] = pageInfoRest;
        }
        output[key] = value.edges.map((item: any) => {
          if (item.node) {
            return removeNodesAndEdges(item.node);
          }
          return item;
        });
      } else {
        output[key] = value === null ? null : removeNodesAndEdges(value);
      }
    });

  return output;
};
