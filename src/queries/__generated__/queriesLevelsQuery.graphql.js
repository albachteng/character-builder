/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type queriesLevelFeatureOptionsQuery$ref = any;
type queriesSpellslotsQuery$ref = any;
export type FilterFindManyLevelInput = {|
  _id?: ?string,
  ability_score_bonuses?: ?number,
  class?: ?FilterFindManyAbilityScoreSkillsInput,
  class_specific?: ?FilterFindManyLevelClass_specificInput,
  feature_choices?: ?$ReadOnlyArray<?FilterFindManyAbilityScoreSkillsInput>,
  features?: ?$ReadOnlyArray<?FilterFindManyAbilityScoreSkillsInput>,
  index?: ?string,
  level?: ?number,
  prof_bonus?: ?number,
  spellcasting?: ?FilterFindManyLevelSpellcastingInput,
  subclass?: ?FilterFindManyAbilityScoreSkillsInput,
  subclass_specific?: ?FilterFindManyLevelSubclass_specificInput,
  url?: ?string,
  _operators?: ?FilterFindManyLevelOperatorsInput,
  OR?: ?$ReadOnlyArray<FilterFindManyLevelInput>,
  AND?: ?$ReadOnlyArray<FilterFindManyLevelInput>,
|};
export type FilterFindManyAbilityScoreSkillsInput = {|
  index?: ?string,
  name?: ?string,
  url?: ?string,
|};
export type FilterFindManyLevelClass_specificInput = {|
  action_surges?: ?number,
  arcane_recovery_levels?: ?number,
  aura_range?: ?number,
  bardic_inspiration_die?: ?number,
  brutal_critical_dice?: ?number,
  channel_divinity_charges?: ?number,
  creating_spell_slots?: ?$ReadOnlyArray<?FilterFindManyLevelClass_specificCreating_spell_slotsInput>,
  destroy_undead_cr?: ?number,
  extra_attacks?: ?number,
  favored_enemies?: ?number,
  favored_terrain?: ?number,
  indomitable_uses?: ?number,
  invocations_known?: ?number,
  ki_points?: ?number,
  magical_secrets_max_5?: ?number,
  magical_secrets_max_7?: ?number,
  magical_secrets_max_9?: ?number,
  martial_arts?: ?FilterFindManyLevelClass_specificMartial_artsInput,
  metamagic_known?: ?number,
  mystic_arcanum_level_6?: ?number,
  mystic_arcanum_level_7?: ?number,
  mystic_arcanum_level_8?: ?number,
  mystic_arcanum_level_9?: ?number,
  rage_count?: ?number,
  rage_damage_bonus?: ?number,
  sneak_attack?: ?FilterFindManyLevelClass_specificSneak_attackInput,
  song_of_rest_die?: ?number,
  sorcery_points?: ?number,
  unarmored_movement?: ?number,
  wild_shape_fly?: ?boolean,
  wild_shape_max_cr?: ?number,
  wild_shape_swim?: ?boolean,
|};
export type FilterFindManyLevelClass_specificCreating_spell_slotsInput = {|
  sorcery_point_cost?: ?number,
  spell_slot_level?: ?number,
|};
export type FilterFindManyLevelClass_specificMartial_artsInput = {|
  dice_count?: ?number,
  dice_value?: ?number,
|};
export type FilterFindManyLevelClass_specificSneak_attackInput = {|
  dice_count?: ?number,
  dice_value?: ?number,
|};
export type FilterFindManyLevelSpellcastingInput = {|
  cantrips_known?: ?number,
  spell_slots_level_1?: ?number,
  spell_slots_level_2?: ?number,
  spell_slots_level_3?: ?number,
  spell_slots_level_4?: ?number,
  spell_slots_level_5?: ?number,
  spell_slots_level_6?: ?number,
  spell_slots_level_7?: ?number,
  spell_slots_level_8?: ?number,
  spell_slots_level_9?: ?number,
  spells_known?: ?number,
|};
export type FilterFindManyLevelSubclass_specificInput = {|
  additional_magical_secrets_max_lvl?: ?number,
  aura_range?: ?number,
|};
export type FilterFindManyLevelOperatorsInput = {|
  _id?: ?FilterFindManyLevel_idOperatorsInput
|};
export type FilterFindManyLevel_idOperatorsInput = {|
  gt?: ?string,
  gte?: ?string,
  lt?: ?string,
  lte?: ?string,
  ne?: ?string,
  in?: ?$ReadOnlyArray<?string>,
  nin?: ?$ReadOnlyArray<?string>,
  regex?: ?any,
  exists?: ?boolean,
|};
export type queriesLevelsQueryVariables = {|
  FilterFindManyLevelInput?: ?FilterFindManyLevelInput
|};
export type queriesLevelsQueryResponse = {|
  +levels: $ReadOnlyArray<{|
    +index: ?string,
    +ability_score_bonuses: ?number,
    +prof_bonus: ?number,
    +$fragmentRefs: queriesLevelFeatureOptionsQuery$ref & queriesSpellslotsQuery$ref,
  |}>
|};
export type queriesLevelsQuery = {|
  variables: queriesLevelsQueryVariables,
  response: queriesLevelsQueryResponse,
|};
*/


/*
query queriesLevelsQuery(
  $FilterFindManyLevelInput: FilterFindManyLevelInput
) {
  levels(filter: $FilterFindManyLevelInput) {
    index
    ability_score_bonuses
    prof_bonus
    ...queriesLevelFeatureOptionsQuery
    ...queriesSpellslotsQuery
  }
}

fragment queriesLevelFeatureOptionsQuery on Level {
  feature_choices {
    name
    url
  }
  features {
    name
    url
  }
}

fragment queriesSpellslotsQuery on Level {
  spellcasting {
    cantrips_known
    spells_known
    spell_slots_level_1
    spell_slots_level_2
    spell_slots_level_3
    spell_slots_level_4
    spell_slots_level_5
    spell_slots_level_6
    spell_slots_level_7
    spell_slots_level_8
    spell_slots_level_9
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "FilterFindManyLevelInput"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "FilterFindManyLevelInput"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ability_score_bonuses",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "prof_bonus",
  "storageKey": null
},
v5 = [
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
    "name": "url",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "queriesLevelsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Level",
        "kind": "LinkedField",
        "name": "levels",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "queriesLevelFeatureOptionsQuery"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "queriesSpellslotsQuery"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "queriesLevelsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Level",
        "kind": "LinkedField",
        "name": "levels",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AbilityScoreSkills",
            "kind": "LinkedField",
            "name": "feature_choices",
            "plural": true,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AbilityScoreSkills",
            "kind": "LinkedField",
            "name": "features",
            "plural": true,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "759fef37cda51c6eb1967eab446ddf58",
    "id": null,
    "metadata": {},
    "name": "queriesLevelsQuery",
    "operationKind": "query",
    "text": "query queriesLevelsQuery(\n  $FilterFindManyLevelInput: FilterFindManyLevelInput\n) {\n  levels(filter: $FilterFindManyLevelInput) {\n    index\n    ability_score_bonuses\n    prof_bonus\n    ...queriesLevelFeatureOptionsQuery\n    ...queriesSpellslotsQuery\n  }\n}\n\nfragment queriesLevelFeatureOptionsQuery on Level {\n  feature_choices {\n    name\n    url\n  }\n  features {\n    name\n    url\n  }\n}\n\nfragment queriesSpellslotsQuery on Level {\n  spellcasting {\n    cantrips_known\n    spells_known\n    spell_slots_level_1\n    spell_slots_level_2\n    spell_slots_level_3\n    spell_slots_level_4\n    spell_slots_level_5\n    spell_slots_level_6\n    spell_slots_level_7\n    spell_slots_level_8\n    spell_slots_level_9\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f02a6d3356dda119ba6275b3f01db5b0';

module.exports = node;
