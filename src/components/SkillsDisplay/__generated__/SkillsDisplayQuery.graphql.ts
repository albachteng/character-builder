/**
 * @generated SignedSource<<5954b77130b1b92e77250a3855caf328>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SkillsDisplayQuery$variables = {};
export type SkillsDisplayQuery$data = {
  readonly skills: ReadonlyArray<{
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v4 = [
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SkillsDisplayQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SkillsDisplayQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "6e4e377713c09dd401822df556431a07",
    "id": null,
    "metadata": {},
    "name": "SkillsDisplayQuery",
    "operationKind": "query",
    "text": "query SkillsDisplayQuery {\n  skills {\n    name\n    __typename\n    index\n    url\n    desc\n    ability_score {\n      name\n      index\n      __typename\n      url\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "26b3bdd2b9673bb55774061eb0fa51f6";

export default node;
