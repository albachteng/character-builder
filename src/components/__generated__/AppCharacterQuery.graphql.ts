/**
 * @generated SignedSource<<67435b4b33ce7dea353d85724cb69f8a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilterFindOneClassInput = {
  AND?: ReadonlyArray<FilterFindOneClassInput> | null;
  OR?: ReadonlyArray<FilterFindOneClassInput> | null;
  _id?: string | null;
  _operators?: FilterFindOneClassOperatorsInput | null;
  class_levels?: string | null;
  hit_die?: number | null;
  index?: string | null;
  multi_classing?: FilterFindOneClassMulti_classingInput | null;
  name?: string | null;
  proficiencies?: ReadonlyArray<FilterFindOneClassProficienciesInput | null> | null;
  proficiency_choices?: ReadonlyArray<FilterFindOneClassProficiency_choicesInput | null> | null;
  saving_throws?: ReadonlyArray<FilterFindOneClassSaving_throwsInput | null> | null;
  spellcasting?: FilterFindOneClassSpellcastingInput | null;
  spells?: string | null;
  starting_equipment?: ReadonlyArray<FilterFindOneClassStarting_equipmentInput | null> | null;
  starting_equipment_options?: ReadonlyArray<FilterFindOneClassStarting_equipment_optionsInput | null> | null;
  subclasses?: ReadonlyArray<FilterFindOneClassSubclassesInput | null> | null;
  url?: string | null;
};
export type FilterFindOneClassMulti_classingInput = {
  prerequisite_options?: FilterFindOneClassMulti_classingPrerequisite_optionsInput | null;
  prerequisites?: ReadonlyArray<FilterFindOneClassMulti_classingPrerequisitesInput | null> | null;
  proficiencies?: ReadonlyArray<FilterFindOneClassMulti_classingProficienciesInput | null> | null;
  proficiency_choices?: ReadonlyArray<FilterFindOneClassMulti_classingProficiency_choicesInput | null> | null;
};
export type FilterFindOneClassMulti_classingPrerequisitesInput = {
  _id?: any | null;
  ability_score?: FilterFindOneClassMulti_classingPrerequisitesAbility_scoreInput | null;
  minimum_score?: number | null;
};
export type FilterFindOneClassMulti_classingPrerequisitesAbility_scoreInput = {
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneClassMulti_classingPrerequisite_optionsInput = {
  choose?: number | null;
  from?: ReadonlyArray<FilterFindOneClassMulti_classingPrerequisite_optionsFromInput | null> | null;
  type?: string | null;
};
export type FilterFindOneClassMulti_classingPrerequisite_optionsFromInput = {
  _id?: any | null;
  ability_score?: FilterFindOneClassMulti_classingPrerequisite_optionsFromAbility_scoreInput | null;
  minimum_score?: number | null;
};
export type FilterFindOneClassMulti_classingPrerequisite_optionsFromAbility_scoreInput = {
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneClassMulti_classingProficienciesInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneClassMulti_classingProficiency_choicesInput = {
  _id?: any | null;
  choose?: number | null;
  from?: ReadonlyArray<FilterFindOneClassMulti_classingProficiency_choicesFromInput | null> | null;
  type?: string | null;
};
export type FilterFindOneClassMulti_classingProficiency_choicesFromInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneClassProficienciesInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneClassProficiency_choicesInput = {
  _id?: any | null;
  choose?: number | null;
  from?: ReadonlyArray<FilterFindOneClassProficiency_choicesFromInput | null> | null;
  type?: string | null;
};
export type FilterFindOneClassProficiency_choicesFromInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneClassSaving_throwsInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneClassSpellcastingInput = {
  info?: ReadonlyArray<FilterFindOneClassSpellcastingInfoInput | null> | null;
  level?: number | null;
  spellcasting_ability?: FilterFindOneClassSpellcastingSpellcasting_abilityInput | null;
};
export type FilterFindOneClassSpellcastingInfoInput = {
  _id?: any | null;
  desc?: ReadonlyArray<string | null> | null;
  name?: string | null;
};
export type FilterFindOneClassSpellcastingSpellcasting_abilityInput = {
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneClassStarting_equipmentInput = {
  _id?: any | null;
  equipment?: FilterFindOneClassStarting_equipmentEquipmentInput | null;
  quantity?: number | null;
};
export type FilterFindOneClassStarting_equipmentEquipmentInput = {
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneClassStarting_equipment_optionsInput = {
  _id?: any | null;
  choose?: number | null;
  from?: ReadonlyArray<FilterFindOneClassStarting_equipment_optionsFromInput | null> | null;
  type?: string | null;
};
export type FilterFindOneClassStarting_equipment_optionsFromInput = {
  _id?: any | null;
  equipment?: FilterFindOneClassStarting_equipment_optionsFromEquipmentInput | null;
  quantity?: number | null;
};
export type FilterFindOneClassStarting_equipment_optionsFromEquipmentInput = {
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneClassSubclassesInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneClassOperatorsInput = {
  _id?: FilterFindOneClass_idOperatorsInput | null;
  class_levels?: FilterFindOneClassClass_levelsOperatorsInput | null;
  hit_die?: FilterFindOneClassHit_dieOperatorsInput | null;
  index?: FilterFindOneClassIndexOperatorsInput | null;
  multi_classing?: FilterFindOneClassMulti_classingOperatorsInput | null;
  name?: FilterFindOneClassNameOperatorsInput | null;
  spellcasting?: FilterFindOneClassSpellcastingOperatorsInput | null;
  spells?: FilterFindOneClassSpellsOperatorsInput | null;
  url?: FilterFindOneClassUrlOperatorsInput | null;
};
export type FilterFindOneClass_idOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneClassClass_levelsOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneClassMulti_classingOperatorsInput = {
  prerequisite_options?: FilterFindOneClassMulti_classingPrerequisite_optionsOperatorsInput | null;
};
export type FilterFindOneClassMulti_classingPrerequisite_optionsOperatorsInput = {
  choose?: FilterFindOneClassMulti_classingPrerequisite_optionsChooseOperatorsInput | null;
  type?: FilterFindOneClassMulti_classingPrerequisite_optionsTypeOperatorsInput | null;
};
export type FilterFindOneClassMulti_classingPrerequisite_optionsChooseOperatorsInput = {
  exists?: boolean | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number | null> | null;
  lt?: number | null;
  lte?: number | null;
  ne?: number | null;
  nin?: ReadonlyArray<number | null> | null;
};
export type FilterFindOneClassMulti_classingPrerequisite_optionsTypeOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneClassHit_dieOperatorsInput = {
  exists?: boolean | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number | null> | null;
  lt?: number | null;
  lte?: number | null;
  ne?: number | null;
  nin?: ReadonlyArray<number | null> | null;
};
export type FilterFindOneClassIndexOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneClassNameOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneClassSpellcastingOperatorsInput = {
  level?: FilterFindOneClassSpellcastingLevelOperatorsInput | null;
  spellcasting_ability?: FilterFindOneClassSpellcastingSpellcasting_abilityOperatorsInput | null;
};
export type FilterFindOneClassSpellcastingLevelOperatorsInput = {
  exists?: boolean | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number | null> | null;
  lt?: number | null;
  lte?: number | null;
  ne?: number | null;
  nin?: ReadonlyArray<number | null> | null;
};
export type FilterFindOneClassSpellcastingSpellcasting_abilityOperatorsInput = {
  index?: FilterFindOneClassSpellcastingSpellcasting_abilityIndexOperatorsInput | null;
  name?: FilterFindOneClassSpellcastingSpellcasting_abilityNameOperatorsInput | null;
  url?: FilterFindOneClassSpellcastingSpellcasting_abilityUrlOperatorsInput | null;
};
export type FilterFindOneClassSpellcastingSpellcasting_abilityIndexOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneClassSpellcastingSpellcasting_abilityNameOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneClassSpellcastingSpellcasting_abilityUrlOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneClassSpellsOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneClassUrlOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneRaceInput = {
  AND?: ReadonlyArray<FilterFindOneRaceInput> | null;
  OR?: ReadonlyArray<FilterFindOneRaceInput> | null;
  _id?: string | null;
  _operators?: FilterFindOneRaceOperatorsInput | null;
  ability_bonus_options?: FilterFindOneRaceAbility_bonus_optionsInput | null;
  ability_bonuses?: ReadonlyArray<FilterFindOneRaceAbility_bonusesInput | null> | null;
  age?: string | null;
  alignment?: string | null;
  index?: string | null;
  language_desc?: string | null;
  language_options?: FilterFindOneRaceLanguage_optionsInput | null;
  languages?: ReadonlyArray<FilterFindOneRaceLanguagesInput | null> | null;
  name?: string | null;
  size?: string | null;
  size_description?: string | null;
  speed?: number | null;
  starting_proficiencies?: ReadonlyArray<FilterFindOneRaceStarting_proficienciesInput | null> | null;
  starting_proficiency_options?: FilterFindOneRaceStarting_proficiency_optionsInput | null;
  subraces?: ReadonlyArray<FilterFindOneRaceSubracesInput | null> | null;
  traits?: ReadonlyArray<FilterFindOneRaceTraitsInput | null> | null;
  url?: string | null;
};
export type FilterFindOneRaceAbility_bonus_optionsInput = {
  choose?: number | null;
  from?: ReadonlyArray<FilterFindOneRaceAbility_bonus_optionsFromInput | null> | null;
  type?: string | null;
};
export type FilterFindOneRaceAbility_bonus_optionsFromInput = {
  _id?: any | null;
  ability_score?: FilterFindOneRaceAbility_bonus_optionsFromAbility_scoreInput | null;
  bonus?: number | null;
};
export type FilterFindOneRaceAbility_bonus_optionsFromAbility_scoreInput = {
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneRaceAbility_bonusesInput = {
  _id?: any | null;
  ability_score?: FilterFindOneRaceAbility_bonusesAbility_scoreInput | null;
  bonus?: number | null;
};
export type FilterFindOneRaceAbility_bonusesAbility_scoreInput = {
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneRaceLanguage_optionsInput = {
  choose?: number | null;
  from?: ReadonlyArray<FilterFindOneRaceLanguage_optionsFromInput | null> | null;
  type?: string | null;
};
export type FilterFindOneRaceLanguage_optionsFromInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneRaceLanguagesInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneRaceStarting_proficienciesInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneRaceStarting_proficiency_optionsInput = {
  choose?: number | null;
  from?: ReadonlyArray<FilterFindOneRaceStarting_proficiency_optionsFromInput | null> | null;
  type?: string | null;
};
export type FilterFindOneRaceStarting_proficiency_optionsFromInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneRaceSubracesInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneRaceTraitsInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneRaceOperatorsInput = {
  _id?: FilterFindOneRace_idOperatorsInput | null;
  ability_bonus_options?: FilterFindOneRaceAbility_bonus_optionsOperatorsInput | null;
  age?: FilterFindOneRaceAgeOperatorsInput | null;
  alignment?: FilterFindOneRaceAlignmentOperatorsInput | null;
  index?: FilterFindOneRaceIndexOperatorsInput | null;
  language_desc?: FilterFindOneRaceLanguage_descOperatorsInput | null;
  language_options?: FilterFindOneRaceLanguage_optionsOperatorsInput | null;
  name?: FilterFindOneRaceNameOperatorsInput | null;
  size?: FilterFindOneRaceSizeOperatorsInput | null;
  size_description?: FilterFindOneRaceSize_descriptionOperatorsInput | null;
  speed?: FilterFindOneRaceSpeedOperatorsInput | null;
  starting_proficiency_options?: FilterFindOneRaceStarting_proficiency_optionsOperatorsInput | null;
  url?: FilterFindOneRaceUrlOperatorsInput | null;
};
export type FilterFindOneRace_idOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneRaceAbility_bonus_optionsOperatorsInput = {
  choose?: FilterFindOneRaceAbility_bonus_optionsChooseOperatorsInput | null;
  type?: FilterFindOneRaceAbility_bonus_optionsTypeOperatorsInput | null;
};
export type FilterFindOneRaceAbility_bonus_optionsChooseOperatorsInput = {
  exists?: boolean | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number | null> | null;
  lt?: number | null;
  lte?: number | null;
  ne?: number | null;
  nin?: ReadonlyArray<number | null> | null;
};
export type FilterFindOneRaceAbility_bonus_optionsTypeOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneRaceAgeOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneRaceAlignmentOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneRaceIndexOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneRaceLanguage_descOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneRaceLanguage_optionsOperatorsInput = {
  choose?: FilterFindOneRaceLanguage_optionsChooseOperatorsInput | null;
  type?: FilterFindOneRaceLanguage_optionsTypeOperatorsInput | null;
};
export type FilterFindOneRaceLanguage_optionsChooseOperatorsInput = {
  exists?: boolean | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number | null> | null;
  lt?: number | null;
  lte?: number | null;
  ne?: number | null;
  nin?: ReadonlyArray<number | null> | null;
};
export type FilterFindOneRaceLanguage_optionsTypeOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneRaceNameOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneRaceSizeOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneRaceSize_descriptionOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneRaceSpeedOperatorsInput = {
  exists?: boolean | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number | null> | null;
  lt?: number | null;
  lte?: number | null;
  ne?: number | null;
  nin?: ReadonlyArray<number | null> | null;
};
export type FilterFindOneRaceStarting_proficiency_optionsOperatorsInput = {
  choose?: FilterFindOneRaceStarting_proficiency_optionsChooseOperatorsInput | null;
  type?: FilterFindOneRaceStarting_proficiency_optionsTypeOperatorsInput | null;
};
export type FilterFindOneRaceStarting_proficiency_optionsChooseOperatorsInput = {
  exists?: boolean | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number | null> | null;
  lt?: number | null;
  lte?: number | null;
  ne?: number | null;
  nin?: ReadonlyArray<number | null> | null;
};
export type FilterFindOneRaceStarting_proficiency_optionsTypeOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneRaceUrlOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneBackgroundInput = {
  AND?: ReadonlyArray<FilterFindOneBackgroundInput> | null;
  OR?: ReadonlyArray<FilterFindOneBackgroundInput> | null;
  _id?: string | null;
  _operators?: FilterFindOneBackgroundOperatorsInput | null;
  bonds?: FilterFindOneBackgroundBondsInput | null;
  feature?: FilterFindOneBackgroundFeatureInput | null;
  flaws?: FilterFindOneBackgroundFlawsInput | null;
  ideals?: FilterFindOneBackgroundIdealsInput | null;
  index?: string | null;
  language_options?: FilterFindOneBackgroundLanguage_optionsInput | null;
  name?: string | null;
  personality_traits?: FilterFindOneBackgroundPersonality_traitsInput | null;
  starting_equipment?: ReadonlyArray<FilterFindOneBackgroundStarting_equipmentInput | null> | null;
  starting_equipment_options?: ReadonlyArray<FilterFindOneBackgroundStarting_equipment_optionsInput | null> | null;
  starting_proficiencies?: ReadonlyArray<FilterFindOneBackgroundStarting_proficienciesInput | null> | null;
  url?: string | null;
};
export type FilterFindOneBackgroundStarting_proficienciesInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneBackgroundLanguage_optionsInput = {
  choose?: number | null;
  from?: ReadonlyArray<FilterFindOneBackgroundLanguage_optionsFromInput | null> | null;
  type?: string | null;
};
export type FilterFindOneBackgroundLanguage_optionsFromInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneBackgroundStarting_equipmentInput = {
  equipment?: FilterFindOneBackgroundStarting_equipmentEquipmentInput | null;
  quantity?: number | null;
};
export type FilterFindOneBackgroundStarting_equipmentEquipmentInput = {
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneBackgroundStarting_equipment_optionsInput = {
  choose?: number | null;
  from?: ReadonlyArray<FilterFindOneBackgroundStarting_equipment_optionsFromInput | null> | null;
  type?: string | null;
};
export type FilterFindOneBackgroundStarting_equipment_optionsFromInput = {
  equipment?: FilterFindOneBackgroundStarting_equipment_optionsFromEquipmentInput | null;
  quantity?: number | null;
};
export type FilterFindOneBackgroundStarting_equipment_optionsFromEquipmentInput = {
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneBackgroundFeatureInput = {
  desc?: ReadonlyArray<string | null> | null;
  name?: string | null;
};
export type FilterFindOneBackgroundPersonality_traitsInput = {
  choose?: number | null;
  from?: ReadonlyArray<string | null> | null;
  type?: string | null;
};
export type FilterFindOneBackgroundIdealsInput = {
  choose?: number | null;
  from?: ReadonlyArray<FilterFindOneBackgroundIdealsFromInput | null> | null;
  type?: string | null;
};
export type FilterFindOneBackgroundIdealsFromInput = {
  _id?: any | null;
  alignments?: ReadonlyArray<FilterFindOneBackgroundIdealsFromAlignmentsInput | null> | null;
  desc?: string | null;
};
export type FilterFindOneBackgroundIdealsFromAlignmentsInput = {
  _id?: any | null;
  index?: string | null;
  name?: string | null;
  url?: string | null;
};
export type FilterFindOneBackgroundBondsInput = {
  choose?: number | null;
  from?: ReadonlyArray<string | null> | null;
  type?: string | null;
};
export type FilterFindOneBackgroundFlawsInput = {
  choose?: number | null;
  from?: ReadonlyArray<string | null> | null;
  type?: string | null;
};
export type FilterFindOneBackgroundOperatorsInput = {
  _id?: FilterFindOneBackground_idOperatorsInput | null;
  bonds?: FilterFindOneBackgroundBondsOperatorsInput | null;
  feature?: FilterFindOneBackgroundFeatureOperatorsInput | null;
  flaws?: FilterFindOneBackgroundFlawsOperatorsInput | null;
  ideals?: FilterFindOneBackgroundIdealsOperatorsInput | null;
  index?: FilterFindOneBackgroundIndexOperatorsInput | null;
  language_options?: FilterFindOneBackgroundLanguage_optionsOperatorsInput | null;
  name?: FilterFindOneBackgroundNameOperatorsInput | null;
  personality_traits?: FilterFindOneBackgroundPersonality_traitsOperatorsInput | null;
  url?: FilterFindOneBackgroundUrlOperatorsInput | null;
};
export type FilterFindOneBackground_idOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneBackgroundIndexOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneBackgroundNameOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneBackgroundLanguage_optionsOperatorsInput = {
  choose?: FilterFindOneBackgroundLanguage_optionsChooseOperatorsInput | null;
  type?: FilterFindOneBackgroundLanguage_optionsTypeOperatorsInput | null;
};
export type FilterFindOneBackgroundLanguage_optionsChooseOperatorsInput = {
  exists?: boolean | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number | null> | null;
  lt?: number | null;
  lte?: number | null;
  ne?: number | null;
  nin?: ReadonlyArray<number | null> | null;
};
export type FilterFindOneBackgroundLanguage_optionsTypeOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneBackgroundUrlOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneBackgroundFeatureOperatorsInput = {
  desc?: FilterFindOneBackgroundFeatureDescOperatorsInput | null;
  name?: FilterFindOneBackgroundFeatureNameOperatorsInput | null;
};
export type FilterFindOneBackgroundFeatureNameOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneBackgroundFeatureDescOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneBackgroundPersonality_traitsOperatorsInput = {
  choose?: FilterFindOneBackgroundPersonality_traitsChooseOperatorsInput | null;
  from?: FilterFindOneBackgroundPersonality_traitsFromOperatorsInput | null;
  type?: FilterFindOneBackgroundPersonality_traitsTypeOperatorsInput | null;
};
export type FilterFindOneBackgroundPersonality_traitsChooseOperatorsInput = {
  exists?: boolean | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number | null> | null;
  lt?: number | null;
  lte?: number | null;
  ne?: number | null;
  nin?: ReadonlyArray<number | null> | null;
};
export type FilterFindOneBackgroundPersonality_traitsFromOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneBackgroundPersonality_traitsTypeOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneBackgroundIdealsOperatorsInput = {
  choose?: FilterFindOneBackgroundIdealsChooseOperatorsInput | null;
  type?: FilterFindOneBackgroundIdealsTypeOperatorsInput | null;
};
export type FilterFindOneBackgroundIdealsChooseOperatorsInput = {
  exists?: boolean | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number | null> | null;
  lt?: number | null;
  lte?: number | null;
  ne?: number | null;
  nin?: ReadonlyArray<number | null> | null;
};
export type FilterFindOneBackgroundIdealsTypeOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneBackgroundBondsOperatorsInput = {
  choose?: FilterFindOneBackgroundBondsChooseOperatorsInput | null;
  from?: FilterFindOneBackgroundBondsFromOperatorsInput | null;
  type?: FilterFindOneBackgroundBondsTypeOperatorsInput | null;
};
export type FilterFindOneBackgroundBondsChooseOperatorsInput = {
  exists?: boolean | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number | null> | null;
  lt?: number | null;
  lte?: number | null;
  ne?: number | null;
  nin?: ReadonlyArray<number | null> | null;
};
export type FilterFindOneBackgroundBondsFromOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneBackgroundBondsTypeOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneBackgroundFlawsOperatorsInput = {
  choose?: FilterFindOneBackgroundFlawsChooseOperatorsInput | null;
  from?: FilterFindOneBackgroundFlawsFromOperatorsInput | null;
  type?: FilterFindOneBackgroundFlawsTypeOperatorsInput | null;
};
export type FilterFindOneBackgroundFlawsChooseOperatorsInput = {
  exists?: boolean | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number | null> | null;
  lt?: number | null;
  lte?: number | null;
  ne?: number | null;
  nin?: ReadonlyArray<number | null> | null;
};
export type FilterFindOneBackgroundFlawsFromOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type FilterFindOneBackgroundFlawsTypeOperatorsInput = {
  exists?: boolean | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string | null> | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  nin?: ReadonlyArray<string | null> | null;
  regex?: any | null;
};
export type AppCharacterQuery$variables = {
  background?: FilterFindOneBackgroundInput | null;
  class?: FilterFindOneClassInput | null;
  level?: number | null;
  race?: FilterFindOneRaceInput | null;
};
export type AppCharacterQuery$data = {
  readonly background: {
    readonly index: string | null;
    readonly language_options: {
      readonly choose: number | null;
      readonly from: ReadonlyArray<{
        readonly index: string | null;
        readonly name: string | null;
      } | null> | null;
      readonly type: string | null;
    } | null;
    readonly name: string | null;
    readonly starting_proficiencies: ReadonlyArray<{
      readonly index: string | null;
      readonly name: string | null;
      readonly type: string | null;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"FeaturesDisplayFragment_background" | "InventoryDisplayFragment_background" | "PersonalityFragment_background">;
  } | null;
  readonly class: {
    readonly " $fragmentSpreads": FragmentRefs<"FeaturesDisplayFragment_class" | "InventoryDisplayFragment_class">;
  } | null;
  readonly race: {
    readonly ability_bonus_options: {
      readonly choose: number | null;
      readonly from: ReadonlyArray<{
        readonly bonus: number | null;
      } | null> | null;
      readonly type: string | null;
    } | null;
    readonly ability_bonuses: ReadonlyArray<{
      readonly ability_score: {
        readonly index: string | null;
        readonly name: string | null;
      } | null;
      readonly bonus: number | null;
    } | null> | null;
    readonly age: string | null;
    readonly alignment: string | null;
    readonly index: string | null;
    readonly language_desc: string | null;
    readonly language_options: {
      readonly choose: number | null;
      readonly from: ReadonlyArray<{
        readonly index: string | null;
        readonly name: string | null;
      } | null> | null;
      readonly type: string | null;
    } | null;
    readonly languages: ReadonlyArray<{
      readonly index: string | null;
      readonly name: string | null;
    } | null> | null;
    readonly name: string | null;
    readonly size: string | null;
    readonly size_description: string | null;
    readonly speed: number | null;
    readonly starting_proficiencies: ReadonlyArray<{
      readonly index: string | null;
      readonly name: string | null;
    } | null> | null;
    readonly starting_proficiency_options: {
      readonly choose: number | null;
      readonly from: ReadonlyArray<{
        readonly __typename: "RaceStarting_proficiency_optionsFrom";
        readonly index: string | null;
        readonly name: string | null;
      } | null> | null;
      readonly type: string | null;
    } | null;
    readonly subraces: ReadonlyArray<{
      readonly index: string | null;
      readonly name: string | null;
    } | null> | null;
    readonly " $fragmentSpreads": FragmentRefs<"FeaturesDisplayFragment_race">;
  } | null;
};
export type AppCharacterQuery = {
  response: AppCharacterQuery$data;
  variables: AppCharacterQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "background"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "class"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "level"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "race"
},
v4 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "class"
  }
],
v5 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "race"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "choose",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bonus",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "RaceAbility_bonus_options",
  "kind": "LinkedField",
  "name": "ability_bonus_options",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "RaceAbility_bonus_optionsFrom",
      "kind": "LinkedField",
      "name": "from",
      "plural": true,
      "selections": [
        (v7/*: any*/)
      ],
      "storageKey": null
    },
    (v8/*: any*/)
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v12 = [
  (v10/*: any*/),
  (v11/*: any*/)
],
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "RaceAbility_bonuses",
  "kind": "LinkedField",
  "name": "ability_bonuses",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "RaceAbility_bonusesAbility_score",
      "kind": "LinkedField",
      "name": "ability_score",
      "plural": false,
      "selections": (v12/*: any*/),
      "storageKey": null
    },
    (v7/*: any*/)
  ],
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "age",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alignment",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "language_desc",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "concreteType": "RaceLanguage_options",
  "kind": "LinkedField",
  "name": "language_options",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "RaceLanguage_optionsFrom",
      "kind": "LinkedField",
      "name": "from",
      "plural": true,
      "selections": (v12/*: any*/),
      "storageKey": null
    },
    (v8/*: any*/)
  ],
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "concreteType": "RaceLanguages",
  "kind": "LinkedField",
  "name": "languages",
  "plural": true,
  "selections": (v12/*: any*/),
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "size",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "size_description",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "speed",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "concreteType": "RaceStarting_proficiencies",
  "kind": "LinkedField",
  "name": "starting_proficiencies",
  "plural": true,
  "selections": (v12/*: any*/),
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v24 = [
  (v11/*: any*/),
  (v10/*: any*/),
  (v23/*: any*/)
],
v25 = {
  "alias": null,
  "args": null,
  "concreteType": "RaceStarting_proficiency_options",
  "kind": "LinkedField",
  "name": "starting_proficiency_options",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "RaceStarting_proficiency_optionsFrom",
      "kind": "LinkedField",
      "name": "from",
      "plural": true,
      "selections": (v24/*: any*/),
      "storageKey": null
    },
    (v8/*: any*/)
  ],
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "concreteType": "RaceSubraces",
  "kind": "LinkedField",
  "name": "subraces",
  "plural": true,
  "selections": (v12/*: any*/),
  "storageKey": null
},
v27 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "background"
  }
],
v28 = [
  (v10/*: any*/),
  (v11/*: any*/),
  (v8/*: any*/)
],
v29 = {
  "alias": null,
  "args": null,
  "concreteType": "Proficiency",
  "kind": "LinkedField",
  "name": "starting_proficiencies",
  "plural": true,
  "selections": (v28/*: any*/),
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "concreteType": "BackgroundLanguage_options",
  "kind": "LinkedField",
  "name": "language_options",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "BackgroundLanguage_optionsFrom",
      "kind": "LinkedField",
      "name": "from",
      "plural": true,
      "selections": (v12/*: any*/),
      "storageKey": null
    },
    (v8/*: any*/)
  ],
  "storageKey": null
},
v31 = {
  "kind": "Literal",
  "name": "sort",
  "value": "LEVEL_ASC"
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "level",
  "storageKey": null
},
v33 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "desc",
  "storageKey": null
},
v35 = [
  (v23/*: any*/),
  (v10/*: any*/),
  (v11/*: any*/),
  (v33/*: any*/)
],
v36 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v37 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "from",
  "storageKey": null
},
v38 = [
  (v6/*: any*/),
  (v37/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppCharacterQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Class",
        "kind": "LinkedField",
        "name": "class",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FeaturesDisplayFragment_class"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "InventoryDisplayFragment_class"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Race",
        "kind": "LinkedField",
        "name": "race",
        "plural": false,
        "selections": [
          (v9/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/),
          (v10/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/),
          (v11/*: any*/),
          (v19/*: any*/),
          (v20/*: any*/),
          (v21/*: any*/),
          (v22/*: any*/),
          (v25/*: any*/),
          (v26/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FeaturesDisplayFragment_race"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v27/*: any*/),
        "concreteType": "Background",
        "kind": "LinkedField",
        "name": "background",
        "plural": false,
        "selections": [
          (v10/*: any*/),
          (v11/*: any*/),
          (v29/*: any*/),
          (v30/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "InventoryDisplayFragment_background"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FeaturesDisplayFragment_background"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PersonalityFragment_background"
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppCharacterQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Class",
        "kind": "LinkedField",
        "name": "class",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "limit",
                "variableName": "level"
              },
              (v31/*: any*/)
            ],
            "concreteType": "Level",
            "kind": "LinkedField",
            "name": "class_levels",
            "plural": true,
            "selections": [
              (v32/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "ability_score_bonuses",
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  (v31/*: any*/)
                ],
                "concreteType": "Feature",
                "kind": "LinkedField",
                "name": "features",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FeatureChoice",
                    "kind": "LinkedField",
                    "name": "choice",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Class",
                    "kind": "LinkedField",
                    "name": "class",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hit_die",
                        "storageKey": null
                      },
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v33/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v34/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FeatureParent",
                    "kind": "LinkedField",
                    "name": "parent",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v33/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/),
                  (v32/*: any*/),
                  (v11/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FeaturePrerequisites",
                    "kind": "LinkedField",
                    "name": "prerequisites",
                    "plural": true,
                    "selections": [
                      (v32/*: any*/),
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FeatureFeature_specific",
                    "kind": "LinkedField",
                    "name": "feature_specific",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "FeatureFeature_specificSubfeature_options",
                        "kind": "LinkedField",
                        "name": "subfeature_options",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "FeatureFeature_specificSubfeature_optionsFrom",
                            "kind": "LinkedField",
                            "name": "from",
                            "plural": true,
                            "selections": (v35/*: any*/),
                            "storageKey": null
                          },
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "FeatureFeature_specificExpertise_options",
                        "kind": "LinkedField",
                        "name": "expertise_options",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "FeatureFeature_specificExpertise_optionsFrom",
                            "kind": "LinkedField",
                            "name": "from",
                            "plural": true,
                            "selections": (v24/*: any*/),
                            "storageKey": null
                          },
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v33/*: any*/)
                ],
                "storageKey": "features(sort:\"LEVEL_ASC\")"
              },
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "prof_bonus",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "LevelSubclass",
                "kind": "LinkedField",
                "name": "subclass",
                "plural": false,
                "selections": (v12/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClassStarting_equipment",
            "kind": "LinkedField",
            "name": "starting_equipment",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ClassStarting_equipmentEquipment",
                "kind": "LinkedField",
                "name": "equipment",
                "plural": false,
                "selections": (v12/*: any*/),
                "storageKey": null
              },
              (v36/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClassStarting_equipment_options",
            "kind": "LinkedField",
            "name": "starting_equipment_options",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ClassStarting_equipment_optionsFrom",
                "kind": "LinkedField",
                "name": "from",
                "plural": true,
                "selections": [
                  (v36/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Race",
        "kind": "LinkedField",
        "name": "race",
        "plural": false,
        "selections": [
          (v9/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/),
          (v10/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/),
          (v11/*: any*/),
          (v19/*: any*/),
          (v20/*: any*/),
          (v21/*: any*/),
          (v22/*: any*/),
          (v25/*: any*/),
          (v26/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Trait",
            "kind": "LinkedField",
            "name": "traits",
            "plural": true,
            "selections": [
              (v34/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Proficiency",
                "kind": "LinkedField",
                "name": "proficiencies",
                "plural": true,
                "selections": (v28/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "TraitProficiency_choices",
                "kind": "LinkedField",
                "name": "proficiency_choices",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TraitProficiency_choicesFrom",
                    "kind": "LinkedField",
                    "name": "from",
                    "plural": true,
                    "selections": (v24/*: any*/),
                    "storageKey": null
                  },
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "TraitParent",
                "kind": "LinkedField",
                "name": "parent",
                "plural": false,
                "selections": (v12/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "TraitTrait_specific",
                "kind": "LinkedField",
                "name": "trait_specific",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TraitTrait_specificSubtrait_options",
                    "kind": "LinkedField",
                    "name": "subtrait_options",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TraitTrait_specificSubtrait_optionsFrom",
                        "kind": "LinkedField",
                        "name": "from",
                        "plural": true,
                        "selections": (v35/*: any*/),
                        "storageKey": null
                      },
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TraitTrait_specificSpell_options",
                    "kind": "LinkedField",
                    "name": "spell_options",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TraitTrait_specificSpell_optionsFrom",
                        "kind": "LinkedField",
                        "name": "from",
                        "plural": true,
                        "selections": (v24/*: any*/),
                        "storageKey": null
                      },
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TraitTrait_specificDamage_type",
                    "kind": "LinkedField",
                    "name": "damage_type",
                    "plural": false,
                    "selections": (v12/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TraitTrait_specificBreath_weapon",
                    "kind": "LinkedField",
                    "name": "breath_weapon",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v34/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TraitTrait_specificBreath_weaponUsage",
                        "kind": "LinkedField",
                        "name": "usage",
                        "plural": false,
                        "selections": [
                          (v8/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "times",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TraitTrait_specificBreath_weaponDc",
                        "kind": "LinkedField",
                        "name": "dc",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TraitTrait_specificBreath_weaponDcDc_type",
                            "kind": "LinkedField",
                            "name": "dc_type",
                            "plural": false,
                            "selections": (v12/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "success_type",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TraitTrait_specificBreath_weaponDamage",
                        "kind": "LinkedField",
                        "name": "damage",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "damage_at_character_level",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v27/*: any*/),
        "concreteType": "Background",
        "kind": "LinkedField",
        "name": "background",
        "plural": false,
        "selections": [
          (v10/*: any*/),
          (v11/*: any*/),
          (v29/*: any*/),
          (v30/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "BackgroundStarting_equipment",
            "kind": "LinkedField",
            "name": "starting_equipment",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "BackgroundStarting_equipmentEquipment",
                "kind": "LinkedField",
                "name": "equipment",
                "plural": false,
                "selections": (v12/*: any*/),
                "storageKey": null
              },
              (v36/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "BackgroundStarting_equipment_options",
            "kind": "LinkedField",
            "name": "starting_equipment_options",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "BackgroundStarting_equipment_optionsFrom",
                "kind": "LinkedField",
                "name": "from",
                "plural": true,
                "selections": [
                  (v36/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "BackgroundStarting_equipment_optionsFromEquipment",
                    "kind": "LinkedField",
                    "name": "equipment",
                    "plural": false,
                    "selections": (v24/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "BackgroundFeature",
            "kind": "LinkedField",
            "name": "feature",
            "plural": false,
            "selections": [
              (v23/*: any*/),
              (v11/*: any*/),
              (v34/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "BackgroundPersonality_traits",
            "kind": "LinkedField",
            "name": "personality_traits",
            "plural": false,
            "selections": [
              (v23/*: any*/),
              (v6/*: any*/),
              (v37/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "BackgroundIdeals",
            "kind": "LinkedField",
            "name": "ideals",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "BackgroundIdealsFrom",
                "kind": "LinkedField",
                "name": "from",
                "plural": true,
                "selections": [
                  (v34/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "BackgroundIdealsFromAlignments",
                    "kind": "LinkedField",
                    "name": "alignments",
                    "plural": true,
                    "selections": [
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "BackgroundBonds",
            "kind": "LinkedField",
            "name": "bonds",
            "plural": false,
            "selections": (v38/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "BackgroundFlaws",
            "kind": "LinkedField",
            "name": "flaws",
            "plural": false,
            "selections": (v38/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1da93265b85c6eb6421bf1e1cec6bd7b",
    "id": null,
    "metadata": {},
    "name": "AppCharacterQuery",
    "operationKind": "query",
    "text": "query AppCharacterQuery(\n  $class: FilterFindOneClassInput\n  $race: FilterFindOneRaceInput\n  $level: Int\n  $background: FilterFindOneBackgroundInput\n) {\n  class(filter: $class) {\n    ...FeaturesDisplayFragment_class\n    ...InventoryDisplayFragment_class\n  }\n  race(filter: $race) {\n    ability_bonus_options {\n      choose\n      from {\n        bonus\n      }\n      type\n    }\n    ability_bonuses {\n      ability_score {\n        index\n        name\n      }\n      bonus\n    }\n    age\n    alignment\n    index\n    language_desc\n    language_options {\n      choose\n      from {\n        index\n        name\n      }\n      type\n    }\n    languages {\n      index\n      name\n    }\n    name\n    size\n    size_description\n    speed\n    starting_proficiencies {\n      index\n      name\n    }\n    starting_proficiency_options {\n      choose\n      from {\n        name\n        index\n        __typename\n      }\n      type\n    }\n    subraces {\n      index\n      name\n    }\n    ...FeaturesDisplayFragment_race\n  }\n  background(filter: $background) {\n    index\n    name\n    starting_proficiencies {\n      index\n      name\n      type\n    }\n    language_options {\n      choose\n      from {\n        index\n        name\n      }\n      type\n    }\n    ...InventoryDisplayFragment_background\n    ...FeaturesDisplayFragment_background\n    ...PersonalityFragment_background\n  }\n}\n\nfragment FeaturesDisplayFragment_background on Background {\n  feature {\n    __typename\n    name\n    desc\n  }\n}\n\nfragment FeaturesDisplayFragment_class on Class {\n  class_levels(sort: LEVEL_ASC, limit: $level) {\n    level\n    ability_score_bonuses\n    features(sort: LEVEL_ASC) {\n      choice {\n        choose\n        type\n      }\n      class {\n        hit_die\n        index\n        name\n        url\n      }\n      desc\n      parent {\n        index\n        name\n        url\n      }\n      index\n      level\n      name\n      prerequisites {\n        level\n        type\n      }\n      feature_specific {\n        subfeature_options {\n          choose\n          from {\n            __typename\n            index\n            name\n            url\n          }\n          type\n        }\n        expertise_options {\n          choose\n          from {\n            name\n            index\n            __typename\n          }\n          type\n        }\n      }\n      url\n    }\n    index\n    prof_bonus\n    subclass {\n      index\n      name\n    }\n  }\n}\n\nfragment FeaturesDisplayFragment_race on Race {\n  traits {\n    desc\n    index\n    name\n    proficiencies {\n      index\n      name\n      type\n    }\n    proficiency_choices {\n      choose\n      from {\n        name\n        index\n        __typename\n      }\n      type\n    }\n    parent {\n      index\n      name\n    }\n    trait_specific {\n      subtrait_options {\n        choose\n        from {\n          __typename\n          index\n          name\n          url\n        }\n        type\n      }\n      spell_options {\n        choose\n        from {\n          name\n          index\n          __typename\n        }\n        type\n      }\n      damage_type {\n        index\n        name\n      }\n      breath_weapon {\n        name\n        desc\n        usage {\n          type\n          times\n        }\n        dc {\n          dc_type {\n            index\n            name\n          }\n          success_type\n        }\n        damage {\n          damage_at_character_level\n        }\n      }\n    }\n  }\n}\n\nfragment InventoryDisplayFragment_background on Background {\n  starting_equipment {\n    equipment {\n      index\n      name\n    }\n    quantity\n  }\n  starting_equipment_options {\n    choose\n    from {\n      quantity\n      equipment {\n        name\n        index\n        __typename\n      }\n    }\n    type\n  }\n}\n\nfragment InventoryDisplayFragment_class on Class {\n  starting_equipment {\n    equipment {\n      index\n      name\n    }\n    quantity\n  }\n  starting_equipment_options {\n    choose\n    from {\n      quantity\n    }\n    type\n  }\n}\n\nfragment PersonalityFragment_background on Background {\n  personality_traits {\n    __typename\n    choose\n    from\n  }\n  ideals {\n    choose\n    from {\n      desc\n      alignments {\n        name\n      }\n    }\n  }\n  bonds {\n    choose\n    from\n  }\n  flaws {\n    choose\n    from\n  }\n}\n"
  }
};
})();

(node as any).hash = "a318591d153839e97c2449b1efbb3ad7";

export default node;
