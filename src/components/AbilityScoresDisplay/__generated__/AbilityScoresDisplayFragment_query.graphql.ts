/**
 * @generated SignedSource<<1f59bc5ab30605617fb34eaa5131a8eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AbilityScoresDisplayFragment_query$data = {
  readonly abilityScores: ReadonlyArray<{
    readonly index: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"StatFragment_ability_score">;
  }>;
  readonly ruleSections: ReadonlyArray<{
    readonly desc: string | null;
    readonly index: string | null;
    readonly name: string | null;
  }>;
  readonly " $fragmentType": "AbilityScoresDisplayFragment_query";
};
export type AbilityScoresDisplayFragment_query$key = {
  readonly " $data"?: AbilityScoresDisplayFragment_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"AbilityScoresDisplayFragment_query">;
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AbilityScoresDisplayFragment_query",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AbilityScore",
      "kind": "LinkedField",
      "name": "abilityScores",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "StatFragment_ability_score"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "OR": [
              {
                "index": "ability-scores-and-modifiers"
              },
              {
                "index": "resting"
              }
            ]
          }
        }
      ],
      "concreteType": "RuleSection",
      "kind": "LinkedField",
      "name": "ruleSections",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "desc",
          "storageKey": null
        }
      ],
      "storageKey": "ruleSections(filter:{\"OR\":[{\"index\":\"ability-scores-and-modifiers\"},{\"index\":\"resting\"}]})"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "f3a1fff52c54ac5e32dd12ba2ed820fd";

export default node;
