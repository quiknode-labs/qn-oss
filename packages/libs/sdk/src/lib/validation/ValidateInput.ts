import { ZodType, ZodError } from 'zod';
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
    ? new QNInputValidationError({ errors: errorMessages })
    : null;
}

// Decorator for runtime validation to handle input that is unkown at compile time
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
