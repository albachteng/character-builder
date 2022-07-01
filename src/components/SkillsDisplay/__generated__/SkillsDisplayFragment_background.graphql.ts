/**
 * @generated SignedSource<<b4a1efa565b5deba7de1e52cbd8b173a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SkillsDisplayFragment_background$data = {
  readonly __typename: "Background";
  readonly starting_proficiencies: ReadonlyArray<{
    readonly __typename: "Proficiency";
    readonly index: string | null;
    readonly name: string | null;
    readonly url: string | null;
  }>;
  readonly " $fragmentType": "SkillsDisplayFragment_background";
};
export type SkillsDisplayFragment_background$key = {
  readonly " $data"?: SkillsDisplayFragment_background$data;
  readonly " $fragmentSpreads": FragmentRefs<"SkillsDisplayFragment_background">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SkillsDisplayFragment_background",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Proficiency",
      "kind": "LinkedField",
      "name": "starting_proficiencies",
      "plural": true,
      "selections": [
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
          "kind": "ScalarField",
          "name": "index",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Background",
  "abstractKey": null
};
})();

(node as any).hash = "fcf2a5c87eb1b49f7bddc68cfa543455";

export default node;
