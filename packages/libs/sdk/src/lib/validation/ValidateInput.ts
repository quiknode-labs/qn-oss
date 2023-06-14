import { ZodType, ZodError } from 'zod';

export class QNInputValidationError extends Error {
  errors: string[];

  constructor({ errors }: { errors: string[] }) {
    super('QuickNode SDK Input Validation Error');
    this.errors = errors;
  }
}

// TODO: Should we make these human or machine readable (or both with a config option)?
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
    ? new QNInputValidationError({ errors: errorMessages })
    : null;
}

export function ValidateInput(schema: ZodType<unknown>) {
  return function (
    target: unknown,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => Promise<any>>
  ) {
    const method = descriptor.value;
    if (!method) return;

    descriptor.value = async function (...args: ZodType<unknown>[]) {
      const [input] = args;
      const validation = schema.safeParse(input);
      if (!validation.success) {
        const formattedErrors = formatErrors(validation.error);
        if (formattedErrors) {
          throw formattedErrors;
        }
      }
      return method.apply(this, args);
    };
  };
}
