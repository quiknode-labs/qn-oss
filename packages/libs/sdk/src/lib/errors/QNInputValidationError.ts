import { ZodError } from 'zod';
export class QNInputValidationError extends Error {
  messages: string[];
  zodError: ZodError;
  issues: ZodError['issues'];

  constructor({
    messages,
    zodError,
  }: {
    messages: string[];
    zodError: ZodError;
  }) {
    super(`QuickNode SDK Input Validation Error: ${messages.join(', ')}`);
    this.messages = messages;
    this.issues = zodError.issues;
    this.zodError = zodError; // see https://github.com/colinhacks/zod/blob/HEAD/ERROR_HANDLING.md
  }
}
