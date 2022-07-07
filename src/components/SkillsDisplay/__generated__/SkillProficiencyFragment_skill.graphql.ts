/**
 * @generated SignedSource<<b94f0113614c1a611753a7c3760a6765>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SkillProficiencyFragment_skill$data = {
  readonly __typename: "Skill";
  readonly ability_score: {
    readonly __typename: "SkillAbility_score";
    readonly index: string | null;
    readonly name: string | null;
  } | null;
  readonly desc: ReadonlyArray<string | null> | null;
  readonly index: string | null;
  readonly name: string | null;
  readonly " $fragmentType": "SkillProficiencyFragment_skill";
};
export type SkillProficiencyFragment_skill$key = {
  readonly " $data"?: SkillProficiencyFragment_skill$data;
  readonly " $fragmentSpreads": FragmentRefs<"SkillProficiencyFragment_skill">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
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
  "name": "SkillProficiencyFragment_skill",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
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
      "concreteType": "SkillAbility_score",
      "kind": "LinkedField",
      "name": "ability_score",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v2/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Skill",
  "abstractKey": null
};
})();

(node as any).hash = "fd63842b19341cf73920c93efe2a6ebc";

export default node;
