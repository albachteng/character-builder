/**
 * @generated SignedSource<<4d10d54316bf0c34f1aca89ecf46158e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpellsDisplaySpellcastingFragment_ruleSections$data = {
  readonly desc: string | null;
  readonly name: string | null;
  readonly " $fragmentType": "SpellsDisplaySpellcastingFragment_ruleSections";
};
export type SpellsDisplaySpellcastingFragment_ruleSections$key = {
  readonly " $data"?: SpellsDisplaySpellcastingFragment_ruleSections$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpellsDisplaySpellcastingFragment_ruleSections">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpellsDisplaySpellcastingFragment_ruleSections",
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

(node as any).hash = "3885e14394fa50d6efee532d55734812";

export default node;
