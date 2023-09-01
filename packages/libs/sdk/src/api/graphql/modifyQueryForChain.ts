import { DefinitionNode, FieldNode, Kind, DocumentNode } from 'graphql';
import { TypedDocumentNode } from '@urql/core';
import { ChainName } from '../types/chains';

type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
};

type MutableDocumentNode = Mutable<DocumentNode>;

// Takes the generated query document and modifies the chain name to the one passed in
export function modifyQueryForChain<TQuery, TQueryVariables>(
  chainName: ChainName,
  documentNode: MutableDocumentNode
): TypedDocumentNode<TQuery, TQueryVariables> {
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
