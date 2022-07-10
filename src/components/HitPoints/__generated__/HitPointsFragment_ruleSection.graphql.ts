/**
 * @generated SignedSource<<5f8b7acf0484811ee9abb83523225562>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HitPointsFragment_ruleSection$data = {
  readonly desc: string | null;
  readonly index: string | null;
  readonly name: string | null;
  readonly " $fragmentType": "HitPointsFragment_ruleSection";
};
export type HitPointsFragment_ruleSection$key = {
  readonly " $data"?: HitPointsFragment_ruleSection$data;
  readonly " $fragmentSpreads": FragmentRefs<"HitPointsFragment_ruleSection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HitPointsFragment_ruleSection",
  "selections": [
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
      "name": "desc",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "RuleSection",
  "abstractKey": null
};

(node as any).hash = "9e9fbbc13f3f73b7ef96809ac7c9186f";

export default node;
