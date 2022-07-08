/**
 * @generated SignedSource<<345b41a1045736181de475fa6e519c02>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StatFragment_ability_score$data = {
  readonly desc: ReadonlyArray<string | null> | null;
  readonly full_name: string | null;
  readonly index: string | null;
  readonly name: string | null;
  readonly skills: ReadonlyArray<{
    readonly index: string | null;
  }>;
  readonly " $fragmentType": "StatFragment_ability_score";
};
export type StatFragment_ability_score$key = {
  readonly " $data"?: StatFragment_ability_score$data;
  readonly " $fragmentSpreads": FragmentRefs<"StatFragment_ability_score">;
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
  "name": "StatFragment_ability_score",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "desc",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "full_name",
      "storageKey": null
    },
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
      "concreteType": "Skill",
      "kind": "LinkedField",
      "name": "skills",
      "plural": true,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "AbilityScore",
  "abstractKey": null
};
})();

(node as any).hash = "860f5f9fb7823fe6e90cffecfc35d744";

export default node;
