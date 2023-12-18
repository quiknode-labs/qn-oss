import { ZodError } from 'zod';
import { QNInputValidationError } from '../errors';

export function formatErrors(
  baseError: ZodError
): QNInputValidationError | null {
  const errorMessages: string[] = [];

  baseError.errors.forEach((error) => {
    errorMessages.push(
      `${error.path.length > 0 ? error.path + ': ' : ''}${error.message}`
    );
  });

  return errorMessages.length > 0
    ? new QNInputValidationError({
        messages: errorMessages,
        zodError: baseError,
      })
    : null;
}
