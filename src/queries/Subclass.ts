import { gql } from "@apollo/client";

export const Subclass = gql`
  query Subclass($filter: FilterFindOneSubclassInput) {
    subclass(filter: $filter) {
      desc
      index
      name
      _id
      subclass_flavor
      url
      subclass_levels {
        ability_score_bonuses
        index
        level
        prof_bonus
        subclass_specific {
          additional_magical_secrets_max_lvl
          aura_range
        }
        subclass {
          index
          name
        }
        spellcasting {
          cantrips_known
          spell_slots_level_1
          spell_slots_level_2
          spell_slots_level_3
          spell_slots_level_4
          spell_slots_level_5
          spell_slots_level_6
          spell_slots_level_7
          spell_slots_level_8
          spell_slots_level_9
          spells_known
        }
        features {
          desc
          index
          level
          name
          reference
          choice {
            choose
            from {
              index
              name
              url
            }
            type
          }
          parent {
            index
            name
            url
          }
          prerequisites {
            level
            type
          }
          feature_specific {
            subfeature_options {
              choose
              type
            }
            expertise_options {
              choose
              type
            }
          }
        }
      }
    }
  }
`;
