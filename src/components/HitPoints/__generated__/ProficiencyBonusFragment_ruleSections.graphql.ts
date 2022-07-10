/**
 * @generated SignedSource<<4d26557648e3c664adb080d389163f71>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProficiencyBonusFragment_ruleSections$data = {
  readonly desc: string | null;
  readonly name: string | null;
  readonly " $fragmentType": "ProficiencyBonusFragment_ruleSections";
};
export type ProficiencyBonusFragment_ruleSections$key = {
  readonly " $data"?: ProficiencyBonusFragment_ruleSections$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProficiencyBonusFragment_ruleSections">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProficiencyBonusFragment_ruleSections",
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

(node as any).hash = "da6fc514cfab38b4bfad909bef2171ce";

export default node;
