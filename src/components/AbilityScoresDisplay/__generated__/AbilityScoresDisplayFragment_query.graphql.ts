/**
 * @generated SignedSource<<983a70afafaacb22d195fbdd4b5aeb3a>>
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
  readonly " $fragmentType": "AbilityScoresDisplayFragment_query";
};
export type AbilityScoresDisplayFragment_query$key = {
  readonly " $data"?: AbilityScoresDisplayFragment_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"AbilityScoresDisplayFragment_query">;
};

const node: ReaderFragment = {
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "index",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "StatFragment_ability_score"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "8327e88be05c45fdfd703a12b704cecc";

export default node;
