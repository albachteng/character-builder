/**
 * @generated SignedSource<<0624332a6406ada859dc160e530c24c8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpellsDisplayFragment_query$data = {
  readonly spells: ReadonlyArray<{
    readonly subclasses: ReadonlyArray<{
      readonly index: string | null;
      readonly name: string | null;
    } | null> | null;
    readonly " $fragmentSpreads": FragmentRefs<"SpellDetailsFragment_spell" | "SpellHeaderFragment_spell">;
  }>;
  readonly " $fragmentType": "SpellsDisplayFragment_query";
};
export type SpellsDisplayFragment_query$key = {
  readonly " $data"?: SpellsDisplayFragment_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpellsDisplayFragment_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "spells"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpellsDisplayFragment_query",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "filter",
          "variableName": "spells"
        }
      ],
      "concreteType": "Spell",
      "kind": "LinkedField",
      "name": "spells",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SpellHeaderFragment_spell"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SpellDetailsFragment_spell"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SpellSubclasses",
          "kind": "LinkedField",
          "name": "subclasses",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "index",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "b985ea36e805a9793a318b78551c1917";

export default node;
