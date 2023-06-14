export class QNInputValidationError extends Error {
  errors: string[];

  constructor({ errors }: { errors: string[] }) {
    super(`QuickNode SDK Input Validation Error: ${errors.join(', ')}`);
    this.errors = errors;
  }
}
