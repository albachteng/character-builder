/**
 * @generated SignedSource<<8c6f36382c35057fe539b7f718f001c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PersonalityFragment_background$data = {
  readonly bonds: {
    readonly choose: number | null;
    readonly from: ReadonlyArray<string | null> | null;
  } | null;
  readonly flaws: {
    readonly choose: number | null;
    readonly from: ReadonlyArray<string | null> | null;
  } | null;
  readonly ideals: {
    readonly choose: number | null;
    readonly from: ReadonlyArray<{
      readonly alignments: ReadonlyArray<{
        readonly name: string | null;
      } | null> | null;
      readonly desc: string | null;
    } | null> | null;
  } | null;
  readonly personality_traits: {
    readonly __typename: "BackgroundPersonality_traits";
    readonly choose: number | null;
    readonly from: ReadonlyArray<string | null> | null;
  } | null;
  readonly " $fragmentType": "PersonalityFragment_background";
};
export type PersonalityFragment_background$key = {
  readonly " $data"?: PersonalityFragment_background$data;
  readonly " $fragmentSpreads": FragmentRefs<"PersonalityFragment_background">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "choose",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "from",
  "storageKey": null
},
v2 = [
  (v0/*: any*/),
  (v1/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PersonalityFragment_background",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "BackgroundPersonality_traits",
      "kind": "LinkedField",
      "name": "personality_traits",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        (v0/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "BackgroundIdeals",
      "kind": "LinkedField",
      "name": "ideals",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "BackgroundIdealsFrom",
          "kind": "LinkedField",
          "name": "from",
          "plural": true,
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
              "concreteType": "BackgroundIdealsFromAlignments",
              "kind": "LinkedField",
              "name": "alignments",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "BackgroundBonds",
      "kind": "LinkedField",
      "name": "bonds",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "BackgroundFlaws",
      "kind": "LinkedField",
      "name": "flaws",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Background",
  "abstractKey": null
};
})();

(node as any).hash = "7665da7a314e5f7a828cc0f8fef3d40a";

export default node;
