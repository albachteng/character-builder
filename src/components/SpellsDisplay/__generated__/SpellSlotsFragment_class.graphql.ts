/**
 * @generated SignedSource<<f93636b59ba1d7efc4ff405dbc0c99ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpellSlotsFragment_class$data = {
  readonly class_levels: ReadonlyArray<{
    readonly spellcasting: {
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
    } | null;
  }>;
  readonly " $fragmentType": "SpellSlotsFragment_class";
};
export type SpellSlotsFragment_class$key = {
  readonly " $data"?: SpellSlotsFragment_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpellSlotsFragment_class">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "level"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpellSlotsFragment_class",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "limit",
          "variableName": "level"
        },
        {
          "kind": "Literal",
          "name": "sort",
          "value": "LEVEL_ASC"
        }
      ],
      "concreteType": "Level",
      "kind": "LinkedField",
      "name": "class_levels",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "LevelSpellcasting",
          "kind": "LinkedField",
          "name": "spellcasting",
          "plural": false,
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
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Class",
  "abstractKey": null
};

(node as any).hash = "b3410a3f4b1285fea67d81354ba51756";

export default node;
