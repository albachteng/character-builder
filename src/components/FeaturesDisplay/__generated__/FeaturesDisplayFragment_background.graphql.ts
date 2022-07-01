/**
 * @generated SignedSource<<6efa60184b4c38dc623b5ace7547059c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeaturesDisplayFragment_background$data = {
  readonly feature: {
    readonly __typename: "BackgroundFeature";
    readonly desc: ReadonlyArray<string | null> | null;
    readonly name: string | null;
  } | null;
  readonly " $fragmentType": "FeaturesDisplayFragment_background";
};
export type FeaturesDisplayFragment_background$key = {
  readonly " $data"?: FeaturesDisplayFragment_background$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeaturesDisplayFragment_background">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturesDisplayFragment_background",
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
          "name": "name",
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
      "storageKey": null
    }
  ],
  "type": "Background",
  "abstractKey": null
};

(node as any).hash = "8897d9f24e7a2d7a3c5a65e82bc832a6";

export default node;
