/**
 * @generated SignedSource<<a3f973447c58f02b17846497972b7f73>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SkillsDisplayFragment_skills$data = {
  readonly __typename: "Skill";
  readonly ability_score: {
    readonly __typename: "SkillAbility_score";
    readonly index: string | null;
    readonly name: string | null;
    readonly url: string | null;
  } | null;
  readonly desc: ReadonlyArray<string | null> | null;
  readonly index: string | null;
  readonly name: string | null;
  readonly url: string | null;
  readonly " $fragmentType": "SkillsDisplayFragment_skills";
};
export type SkillsDisplayFragment_skills$key = {
  readonly " $data"?: SkillsDisplayFragment_skills$data;
  readonly " $fragmentSpreads": FragmentRefs<"SkillsDisplayFragment_skills">;
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SkillsDisplayFragment_skills",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    (v3/*: any*/),
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
        (v1/*: any*/),
        (v3/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Skill",
  "abstractKey": null
};
})();

(node as any).hash = "a3e513868f6727bfbfc01f410feae869";

export default node;
