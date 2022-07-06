/**
 * @generated SignedSource<<766acc01df4bb9a5332d8a05349e26a6>>
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
    readonly index: string | null;
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

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
};
return {
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
        (v0/*: any*/),
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
            (v0/*: any*/),
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
})();

(node as any).hash = "22c1f66d297469d540f6bf260df10b4e";

export default node;
