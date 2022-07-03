/**
 * @generated SignedSource<<c2dc4e192c45e11fc73edc46fb0122e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BackgroundFeatureFragment_feature$data = {
  readonly __typename: "BackgroundFeature";
  readonly desc: ReadonlyArray<string | null> | null;
  readonly name: string | null;
  readonly " $fragmentType": "BackgroundFeatureFragment_feature";
};
export type BackgroundFeatureFragment_feature$key = {
  readonly " $data"?: BackgroundFeatureFragment_feature$data;
  readonly " $fragmentSpreads": FragmentRefs<"BackgroundFeatureFragment_feature">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BackgroundFeatureFragment_feature",
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
      "name": "__typename",
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
  "type": "BackgroundFeature",
  "abstractKey": null
};

(node as any).hash = "01a985349c7035a77f65d161e68ecc49";

export default node;
