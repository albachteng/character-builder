/**
 * @generated SignedSource<<4d507e9e439ce9a4e27db303928d8f3d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SkillsDisplayFragment_race$data = {
  readonly __typename: "Race";
  readonly index: string | null;
  readonly proficiencies: ReadonlyArray<{
    readonly __typename: "RaceStarting_proficiencies";
    readonly index: string | null;
    readonly name: string | null;
    readonly url: string | null;
  } | null> | null;
  readonly proficiency_choices: {
    readonly __typename: "RaceStarting_proficiency_options";
    readonly choose: number | null;
    readonly from: ReadonlyArray<{
      readonly __typename: "RaceStarting_proficiency_optionsFrom";
      readonly index: string | null;
      readonly name: string | null;
      readonly url: string | null;
    } | null> | null;
  } | null;
  readonly " $fragmentType": "SkillsDisplayFragment_race";
};
export type SkillsDisplayFragment_race$key = {
  readonly " $data"?: SkillsDisplayFragment_race$data;
  readonly " $fragmentSpreads": FragmentRefs<"SkillsDisplayFragment_race">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  (v1/*: any*/),
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SkillsDisplayFragment_race",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": "proficiencies",
      "args": null,
      "concreteType": "RaceStarting_proficiencies",
      "kind": "LinkedField",
      "name": "starting_proficiencies",
      "plural": true,
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "alias": "proficiency_choices",
      "args": null,
      "concreteType": "RaceStarting_proficiency_options",
      "kind": "LinkedField",
      "name": "starting_proficiency_options",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "choose",
          "storageKey": null
        },
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "RaceStarting_proficiency_optionsFrom",
          "kind": "LinkedField",
          "name": "from",
          "plural": true,
          "selections": (v2/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Race",
  "abstractKey": null
};
})();

(node as any).hash = "1638ac9dd4cfa57f3775d2da87027c6d";

export default node;
