/**
 * @generated SignedSource<<8e64838c775a5571985329857b479ca0>>
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
  readonly name: string | null;
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

(node as any).hash = "6caf91d668a82e9bdf67dd40c31c81a0";

export default node;
