/**
 * @generated SignedSource<<62507ae0700e52ac61f1cf4fa0902b78>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpellcastingDisplayFragment_class$data = {
  readonly spellcasting: {
    readonly " $fragmentSpreads": FragmentRefs<"SpellModFragment_spellcasting">;
  } | null;
  readonly " $fragmentType": "SpellcastingDisplayFragment_class";
};
export type SpellcastingDisplayFragment_class$key = {
  readonly " $data"?: SpellcastingDisplayFragment_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpellcastingDisplayFragment_class">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpellcastingDisplayFragment_class",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ClassSpellcasting",
      "kind": "LinkedField",
      "name": "spellcasting",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SpellModFragment_spellcasting"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Class",
  "abstractKey": null
};

(node as any).hash = "58b2a3f1a0d025b3b89b3ff064c89a79";

export default node;
