/**
 * @generated SignedSource<<9a429767af66b735404e4a3ddf1c8a62>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SkillsDisplayFragment_class$data = {
  readonly index: string | null;
  readonly proficiencies: ReadonlyArray<{
    readonly __typename: "Proficiency";
    readonly index: string | null;
    readonly name: string | null;
    readonly url: string | null;
  }>;
  readonly proficiency_choices: ReadonlyArray<{
    readonly __typename: "ClassProficiency_choices";
    readonly choose: number | null;
    readonly from: ReadonlyArray<{
      readonly __typename: "ClassProficiency_choicesFrom";
      readonly index: string | null;
      readonly name: string | null;
      readonly url: string | null;
    } | null> | null;
  } | null> | null;
  readonly " $fragmentType": "SkillsDisplayFragment_class";
};
export type SkillsDisplayFragment_class$key = {
  readonly " $data"?: SkillsDisplayFragment_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"SkillsDisplayFragment_class">;
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
  "name": "SkillsDisplayFragment_class",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Proficiency",
      "kind": "LinkedField",
      "name": "proficiencies",
      "plural": true,
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClassProficiency_choices",
      "kind": "LinkedField",
      "name": "proficiency_choices",
      "plural": true,
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
          "concreteType": "ClassProficiency_choicesFrom",
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
  "type": "Class",
  "abstractKey": null
};
})();

(node as any).hash = "dfcf100eeb6aad78170bbb031c11f157";

export default node;
