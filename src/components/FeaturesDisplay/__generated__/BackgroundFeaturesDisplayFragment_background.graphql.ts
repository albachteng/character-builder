/**
 * @generated SignedSource<<bd5fb31a5e8de41a3a1a6c84cbb8542d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BackgroundFeaturesDisplayFragment_background$data = {
  readonly feature: {
    readonly " $fragmentSpreads": FragmentRefs<"BackgroundFeatureFragment_feature">;
  } | null;
  readonly " $fragmentType": "BackgroundFeaturesDisplayFragment_background";
};
export type BackgroundFeaturesDisplayFragment_background$key = {
  readonly " $data"?: BackgroundFeaturesDisplayFragment_background$data;
  readonly " $fragmentSpreads": FragmentRefs<"BackgroundFeaturesDisplayFragment_background">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BackgroundFeaturesDisplayFragment_background",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "BackgroundFeature",
      "kind": "LinkedField",
      "name": "feature",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BackgroundFeatureFragment_feature"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Background",
  "abstractKey": null
};

(node as any).hash = "a043012a5d206a2e63e85c4fc3dd2d02";

export default node;
