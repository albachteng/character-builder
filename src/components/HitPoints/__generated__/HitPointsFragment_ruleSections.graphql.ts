/**
 * @generated SignedSource<<9a8a46cd26d9ee22482fbb1ded68dc50>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HitPointsFragment_ruleSections$data = {
  readonly desc: string | null;
  readonly index: string | null;
  readonly name: string | null;
  readonly " $fragmentType": "HitPointsFragment_ruleSections";
};
export type HitPointsFragment_ruleSections$key = {
  readonly " $data"?: HitPointsFragment_ruleSections$data;
  readonly " $fragmentSpreads": FragmentRefs<"HitPointsFragment_ruleSections">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HitPointsFragment_ruleSections",
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

(node as any).hash = "1f1297e01d84ab56641ed37017fea76c";

export default node;
