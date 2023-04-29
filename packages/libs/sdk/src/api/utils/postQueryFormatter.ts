type FormattedResultBase = {
  results: any[];
  pageInfo: Record<string, any>;
};

// Formats the query result with the edges and nodes removed into what we want to return to the user
export function formatQueryResult<
  QueryResultType extends Record<string, any>, // What the GQL query returns with edges and nodes removed
  FormattedResultType extends FormattedResultBase // What we actually return to the user
>(
  queryResult: QueryResultType,
  resultsKey: keyof QueryResultType, // Key that the actual results are in
  paginationKey: keyof QueryResultType, // Key that the pagination info is in
  resultsKeyToRemove?: string | null, // Key that the results are nested under to remove for each entry
  additionalModification?: (arg: Record<string, any>) => FormattedResultType
): FormattedResultType {
  const additionaProperties: Record<string, any> = Object.fromEntries(
    Object.entries(queryResult).filter(
      ([key]) => key !== resultsKey && key !== paginationKey
    )
  );

  let trimmedResults = queryResult[resultsKey];
  if (resultsKeyToRemove) {
    trimmedResults = trimmedResults.map(
      (result: any) => result[resultsKeyToRemove] || {}
    );
  }
  const formattedResultBase: FormattedResultBase = {
    results: trimmedResults,
    pageInfo: queryResult[paginationKey],
  };

  let result = {
    ...formattedResultBase,
    ...additionaProperties,
  };
  if (additionalModification) result = additionalModification(result);

  return result as FormattedResultType;
}
