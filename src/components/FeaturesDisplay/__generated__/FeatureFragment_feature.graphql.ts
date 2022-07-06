/**
 * @generated SignedSource<<75a124b596b0045b679ad73ae05cb623>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeatureFragment_feature$data = {
  readonly __typename: "Feature";
  readonly desc: ReadonlyArray<string | null> | null;
  readonly index: string | null;
  readonly level: number | null;
  readonly name: string | null;
  readonly " $fragmentType": "FeatureFragment_feature";
};
export type FeatureFragment_feature$key = {
  readonly " $data"?: FeatureFragment_feature$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeatureFragment_feature">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeatureFragment_feature",
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
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "level",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "desc",
      "storageKey": null
    }
  ],
  "type": "Feature",
  "abstractKey": null
};

(node as any).hash = "e685be02368468ea0580a29007fe0d7e";

export default node;
