/**
 * @generated SignedSource<<4946b4d11b5d8e020aeaf4b1a4c11ef6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SkillsDisplayFragment_ruleSections$data = {
  readonly desc: string | null;
  readonly name: string | null;
  readonly " $fragmentType": "SkillsDisplayFragment_ruleSections";
};
export type SkillsDisplayFragment_ruleSections$key = {
  readonly " $data"?: SkillsDisplayFragment_ruleSections$data;
  readonly " $fragmentSpreads": FragmentRefs<"SkillsDisplayFragment_ruleSections">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SkillsDisplayFragment_ruleSections",
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
      "name": "desc",
      "storageKey": null
    }
  ],
  "type": "RuleSection",
  "abstractKey": null
};

(node as any).hash = "cee0d8b7465b128473552892c35fcb12";

export default node;
