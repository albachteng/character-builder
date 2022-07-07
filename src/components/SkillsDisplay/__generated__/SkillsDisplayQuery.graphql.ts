/**
 * @generated SignedSource<<0e07b562e9c36afc51b1c882faf48822>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SkillsDisplayQuery$variables = {};
export type SkillsDisplayQuery$data = {
  readonly skills: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SkillProficiencyFragment_skill">;
  }>;
};
export type SkillsDisplayQuery = {
  response: SkillsDisplayQuery$data;
  variables: SkillsDisplayQuery$variables;
};

const node: ConcreteRequest = (function(){
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
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SkillsDisplayQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Skill",
        "kind": "LinkedField",
        "name": "skills",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SkillProficiencyFragment_skill"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SkillsDisplayQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Skill",
        "kind": "LinkedField",
        "name": "skills",
        "plural": true,
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5816f430cfad078e13a589ca74eea1fe",
    "id": null,
    "metadata": {},
    "name": "SkillsDisplayQuery",
    "operationKind": "query",
    "text": "query SkillsDisplayQuery {\n  skills {\n    ...SkillProficiencyFragment_skill\n  }\n}\n\nfragment SkillProficiencyFragment_skill on Skill {\n  name\n  __typename\n  index\n  desc\n  ability_score {\n    name\n    index\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "898facdabc66c0a14bd05218d22e07b4";

export default node;
