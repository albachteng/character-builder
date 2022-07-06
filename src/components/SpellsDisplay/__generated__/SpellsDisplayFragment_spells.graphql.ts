/**
 * @generated SignedSource<<7985032f2c098d7308bb6dc3610d1dcb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpellsDisplayFragment_spells$data = {
  readonly subclasses: ReadonlyArray<{
    readonly index: string | null;
    readonly name: string | null;
  } | null> | null;
  readonly " $fragmentSpreads": FragmentRefs<"SpellDetailsFragment_spell" | "SpellHeaderFragment_spell">;
  readonly " $fragmentType": "SpellsDisplayFragment_spells";
};
export type SpellsDisplayFragment_spells$key = {
  readonly " $data"?: SpellsDisplayFragment_spells$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpellsDisplayFragment_spells">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpellsDisplayFragment_spells",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SpellHeaderFragment_spell"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SpellDetailsFragment_spell"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SpellSubclasses",
      "kind": "LinkedField",
      "name": "subclasses",
      "plural": true,
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
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Spell",
  "abstractKey": null
};

(node as any).hash = "65e5ab2b72d7f32983390749d9903049";

export default node;
