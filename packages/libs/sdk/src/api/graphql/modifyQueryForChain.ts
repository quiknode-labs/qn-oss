import { DefinitionNode, FieldNode, Kind, DocumentNode } from 'graphql';
import { TypedDocumentNode } from '@urql/core';
import { ChainName } from '../types/chains';

export type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
};

// Takes the generated query document and modifies the chain name to the one passed in
export function modifyQueryForChain<
  TQuery,
  TQueryVariables,
  C extends ChainName,
  D extends Mutable<DocumentNode> // DocumentNode is readonly, so we need to make it mutable
>(chainName: C, documentNode: D): TypedDocumentNode<TQuery, TQueryVariables> {
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
                ...{
                  name: { ...selection.name, value: chainName },
                },
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
