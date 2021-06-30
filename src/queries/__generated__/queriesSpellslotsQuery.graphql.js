/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type queriesSpellslotsQuery$ref: FragmentReference;
declare export opaque type queriesSpellslotsQuery$fragmentType: queriesSpellslotsQuery$ref;
export type queriesSpellslotsQuery = {|
  +spellcasting: ?{|
    +cantrips_known: ?number,
    +spells_known: ?number,
    +spell_slots_level_1: ?number,
    +spell_slots_level_2: ?number,
    +spell_slots_level_3: ?number,
    +spell_slots_level_4: ?number,
    +spell_slots_level_5: ?number,
    +spell_slots_level_6: ?number,
    +spell_slots_level_7: ?number,
    +spell_slots_level_8: ?number,
    +spell_slots_level_9: ?number,
  |},
  +$refType: queriesSpellslotsQuery$ref,
|};
export type queriesSpellslotsQuery$data = queriesSpellslotsQuery;
export type queriesSpellslotsQuery$key = {
  +$data?: queriesSpellslotsQuery$data,
  +$fragmentRefs: queriesSpellslotsQuery$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "queriesSpellslotsQuery",
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
          "name": "spells_known",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Level",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '6ce0b66716fa1491be1380fcb935ccd5';

module.exports = node;
