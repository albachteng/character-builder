/**
 * @generated SignedSource<<525cf66af7bf1372dbb06c92481afc63>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpellSlotsFragment_spellcasting$data = {
  readonly cantrips_known: number | null;
  readonly spell_slots_level_1: number | null;
  readonly spell_slots_level_2: number | null;
  readonly spell_slots_level_3: number | null;
  readonly spell_slots_level_4: number | null;
  readonly spell_slots_level_5: number | null;
  readonly spell_slots_level_6: number | null;
  readonly spell_slots_level_7: number | null;
  readonly spell_slots_level_8: number | null;
  readonly spell_slots_level_9: number | null;
  readonly spells_known: number | null;
  readonly " $fragmentType": "SpellSlotsFragment_spellcasting";
};
export type SpellSlotsFragment_spellcasting$key = {
  readonly " $data"?: SpellSlotsFragment_spellcasting$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpellSlotsFragment_spellcasting">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpellSlotsFragment_spellcasting",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cantrips_known",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "spell_slots_level_1",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "spell_slots_level_2",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "spell_slots_level_3",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "spell_slots_level_4",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "spell_slots_level_5",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "spell_slots_level_6",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "spell_slots_level_7",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "spell_slots_level_8",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "spell_slots_level_9",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "spells_known",
      "storageKey": null
    }
  ],
  "type": "LevelSpellcasting",
  "abstractKey": null
};

(node as any).hash = "2335cdb0e9ae47d6a5b1e73d5a72b63a";

export default node;
