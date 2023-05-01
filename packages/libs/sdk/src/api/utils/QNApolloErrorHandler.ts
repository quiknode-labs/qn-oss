import { ApolloError } from '@apollo/client/core'; // Using core to not pull in react hooks

export function QNApolloErrorHandler(
  _target: any,
  _propertyName: any,
  descriptor: any
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    try {
      const result = originalMethod.apply(this, args);
      return result;
    } catch (error) {
      // TODO Migration: Are errors bubbling up to this? They might be caught in the errorLink
      if (error instanceof ApolloError) {
        const apolloErr = error as ApolloError;
        if (process.env['NODE_ENV'] === 'development') {
          if (error instanceof ApolloError) {
            console.error(apolloErr.message);
            console.error(JSON.stringify(error, null, 2));
          } else {
            console.error(error);
          }
          throw error;
        }
      }
      console.error(
        'Something went wrong! Please file an issue at https://github.com/quiknode-labs/qn-oss/issues'
      );
    }
    return {};
  };
}
