import { DefinitionNode, FieldNode, Kind, DocumentNode } from 'graphql';
import { TypedDocumentNode } from '@urql/core';
import { ChainName } from '../types/chains';

type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
};

type MutableDocumentNode = Mutable<DocumentNode>;

function deepCopyDocumentNode(
  docNode: MutableDocumentNode
): MutableDocumentNode {
  return {
    kind: docNode.kind,
    definitions: docNode.definitions.map((def) => {
      if (def.kind === Kind.OPERATION_DEFINITION) {
        return {
          ...def,
          selectionSet: {
            ...def.selectionSet,
            selections: def.selectionSet.selections.map((selection) => {
              if (selection.kind === Kind.FIELD) {
                return {
                  ...selection,
                  name: { ...selection.name },
                };
              }
              return selection;
            }),
          },
        };
      }
      return def;
    }),
  };
}

export function modifyQueryForChain<TQuery, TQueryVariables>(
  chainName: ChainName,
  originalDocumentNode: MutableDocumentNode
): TypedDocumentNode<TQuery, TQueryVariables> {
  // We need to deep clone the document node in order to not mutate the query so it is consistent
  // across multiple calls to the same query with different chains
  const documentNode = deepCopyDocumentNode(originalDocumentNode);

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
