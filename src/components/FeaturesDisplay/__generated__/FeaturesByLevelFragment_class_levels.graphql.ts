/**
 * @generated SignedSource<<c863e01aba9d2d8effecb9f01793d751>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeaturesByLevelFragment_class_levels$data = {
  readonly level: number | null;
  readonly " $fragmentType": "FeaturesByLevelFragment_class_levels";
};
export type FeaturesByLevelFragment_class_levels$key = {
  readonly " $data"?: FeaturesByLevelFragment_class_levels$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeaturesByLevelFragment_class_levels">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturesByLevelFragment_class_levels",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "level",
      "storageKey": null
    }
  ],
  "type": "Level",
  "abstractKey": null
};

(node as any).hash = "34592362c2aa2c5f1ec1eecaf1ad042a";

export default node;
