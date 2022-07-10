/**
 * @generated SignedSource<<9204c46ec5586f4609d7e38b2e061785>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HitPointsRestingFragment_ruleSections$data = {
  readonly desc: string | null;
  readonly name: string | null;
  readonly " $fragmentType": "HitPointsRestingFragment_ruleSections";
};
export type HitPointsRestingFragment_ruleSections$key = {
  readonly " $data"?: HitPointsRestingFragment_ruleSections$data;
  readonly " $fragmentSpreads": FragmentRefs<"HitPointsRestingFragment_ruleSections">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HitPointsRestingFragment_ruleSections",
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

(node as any).hash = "cc1af79ea821d0973c19441ae741d30e";

export default node;
