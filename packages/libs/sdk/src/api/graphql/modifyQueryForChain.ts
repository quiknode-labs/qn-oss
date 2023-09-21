import { DefinitionNode, FieldNode, Kind, DocumentNode } from 'graphql';
import { TypedDocumentNode } from '@urql/core';
import { ChainName } from '../types/chains';
import { klona } from 'klona';

type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
};

type MutableDocumentNode = Mutable<DocumentNode>;

export function modifyQueryForChain<TQuery, TQueryVariables>(
  chainName: ChainName,
  originalDocumentNode: MutableDocumentNode
): TypedDocumentNode<TQuery, TQueryVariables> {
  // We need to deep clone the document node in order to not mutate the query so it is consistent
  // across multiple calls to the same query with different chains
  const documentNode = klona(originalDocumentNode);

  documentNode.definitions = documentNode.definitions.map(
    (doc: DefinitionNode) => {
      if (doc.kind === Kind.OPERATION_DEFINITION) {
        doc.selectionSet.selections = doc.selectionSet.selections.map(
          (selection) => {
            if (
              selection.kind === Kind.FIELD &&
              selection.name.kind == Kind.NAME &&
              selection.name.value === 'ethereum'
            ) {
              const updatedChainSelection: FieldNode = {
                ...selection,
                name: { ...selection.name, value: chainName },
              };
              return updatedChainSelection;
            }
            return selection;
          }
        );
      }
      return doc;
    }
  );

  return documentNode;
}
