import QuickNode from './client';
export { API } from './api';
export * from './api/types';
export { QNInputValidationError } from './lib/validation/ValidateInput';

// re-export from libraries for convenience
export { gql } from '@urql/core';

export default QuickNode;
