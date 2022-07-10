/**
 * @generated SignedSource<<392678b0615bf44b1fdac5af54eb9b4b>>
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
    readonly index: string | null;
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
  "name": "index",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
          (v0/*: any*/),
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
              (v1/*: any*/),
              (v0/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6cb09e8f9630acea15f37d4ecca2a3e2",
    "id": null,
    "metadata": {},
    "name": "SkillsDisplayQuery",
    "operationKind": "query",
    "text": "query SkillsDisplayQuery {\n  skills {\n    index\n    ...SkillProficiencyFragment_skill\n  }\n}\n\nfragment SkillProficiencyFragment_skill on Skill {\n  name\n  __typename\n  index\n  desc\n  ability_score {\n    name\n    index\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "eb440e506f02fb13325356f3015608c6";

export default node;
