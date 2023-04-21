import { ApolloError } from '@apollo/client';

export function QNApolloErrorHandler(
  _target: any,
  _propertyName: any,
  descriptor: any
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    try {
      return originalMethod.apply(this, args);
    } catch (error: unknown) {
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
  };
}
