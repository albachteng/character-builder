/**
 * @generated SignedSource<<097b34e79e918c2d7a9459a4a98a0686>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpellHeaderFragment_spell$data = {
  readonly level: number | null;
  readonly name: string | null;
  readonly " $fragmentType": "SpellHeaderFragment_spell";
};
export type SpellHeaderFragment_spell$key = {
  readonly " $data"?: SpellHeaderFragment_spell$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpellHeaderFragment_spell">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpellHeaderFragment_spell",
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
      "name": "level",
      "storageKey": null
    }
  ],
  "type": "Spell",
  "abstractKey": null
};

(node as any).hash = "246d255583d54f5bf6c2fb2f9ef18a15";

export default node;
