import { gql } from '@apollo/client';
export const ClassSpellSlots = gql`query SpellSlots ($filter: FilterFindOneClassInput) {
    class (filter: $filter) {
      index
      name
      class_levels (sort: LEVEL_ASC) {
        level
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
    }
  }
`;