import {
  removeNodesAndEdges,
  ResultInput,
  Connection,
} from '../../../src/api/utils/removeNodesAndEdges'; // replace with your actual module

describe('removeNodesAndEdges function', () => {
  const data: ResultInput = {
    __typename: 'TestType',
    testConnection: {
      __typename: 'TestConnection',
      breadcrumbs: 'breadcrumbs',
      total: 5,
      viewport: 'viewport',
      pageInfo: {
        hasNextPage: true,
        hasPreviousPage: false,
      },
      edges: [
        {
          cursor: 'cursor1',
          node: {
            __typename: 'Node',
            value: 'value1',
          },
        },
        {
          cursor: 'cursor2',
          node: {
            __typename: 'Node',
            value: 'value2',
          },
        },
      ],
    },
    anotherValue: 'stringValue',
    yetAnotherValue: 42,
    andOneMore: true,
  };

  const dataNoNode: ResultInput = {
    testConnection: {
      edges: [
        {
          cursor: 'cursor1',
          node: {
            value: 'value1',
          },
        },
        {
          cursor: 'cursor2',
        },
      ],
    },
  };

  it('should remove __typename by default', () => {
    const result = removeNodesAndEdges(data);
    expect(result['__typename']).toBeUndefined();
  });

  it('should keep __typename if keepTypename option is set', () => {
    const result = removeNodesAndEdges(data, { keepTypename: true });
    expect(result['__typename']).toEqual('TestType');
  });

  it('should handle Connection objects correctly', () => {
    const result = removeNodesAndEdges(data);
    expect(
      (result['testConnection'] as Connection).breadcrumbs
    ).toBeUndefined();
    expect(result['testConnectionBreadcrumbs']).toEqual('breadcrumbs');
  });

  it('should handle edge without node', () => {
    const result = removeNodesAndEdges(dataNoNode);
    expect(result['testConnection']).toHaveLength(2);
    expect(result['testConnection'][0]).toHaveProperty('value');
    expect(result['testConnection'][1]).not.toHaveProperty('value');
  });
});
