/**
 * @generated SignedSource<<9bb8dd66baed3428815ff405d959e686>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HitPointsDamageFragment_ruleSections$data = {
  readonly desc: string | null;
  readonly " $fragmentType": "HitPointsDamageFragment_ruleSections";
};
export type HitPointsDamageFragment_ruleSections$key = {
  readonly " $data"?: HitPointsDamageFragment_ruleSections$data;
  readonly " $fragmentSpreads": FragmentRefs<"HitPointsDamageFragment_ruleSections">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HitPointsDamageFragment_ruleSections",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "desc",
      "storageKey": null
    }
  ],
  "type": "RuleSection",
  "abstractKey": null
};

(node as any).hash = "28ae8b21b487985a71753f5fedea2ab2";

export default node;
