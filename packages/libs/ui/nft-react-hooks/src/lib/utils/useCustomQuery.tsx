import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  QueryResult,
  TypedDocumentNode,
  useQuery,
} from '@apollo/client';
import { useEffect } from 'react';

export function useCustomQuery<TData = any, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<TData, TVariables>
): QueryResult<TData, TVariables> {
  const result = useQuery(query, options);

  useEffect(() => {
    if (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore typing is not correct from apollo client, statusCode can be included in networkError
      result.error?.networkError?.statusCode === 429
    ) {
      console.warn(
        'Rate limit reached, head over to https://developers.icy.tools/ to upgrade your account'
      );
    }
  }, [result.error]);

  return result;
}
