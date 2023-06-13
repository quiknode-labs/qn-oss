import * as t from 'io-ts';
import { Either, fold } from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';

// Runtime validation
export function validateInput<T, O = T, I = unknown>(
  type: t.Type<T, O, I>,
  input: I
): T {
  const validationResult: Either<t.Errors, T> = type.decode(input);

  return pipe(
    validationResult,
    fold(
      (errors) => {
        throw new Error(`Invalid input: ${JSON.stringify(errors)}`);
      },
      (validatedInput) => validatedInput
    )
  );
}
