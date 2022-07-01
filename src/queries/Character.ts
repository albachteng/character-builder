import { gql } from '@apollo/client';

export const Character = gql`query Character ($class: FilterFindOneClassInput, $race: FilterFindOneRaceInput, $level: Int, $background: FilterFindOneBackgroundInput) {
    class (filter: $class) {
      class_levels (sort: LEVEL_ASC, limit: $level) {
        level
        ability_score_bonuses
        class {
          index
          name
        }
        features (sort: LEVEL_ASC){
          choice {
            choose
            type
          }
          class {
            hit_die
            index
            name
            url
          }
          desc
          parent {
            index
            name
            url
          }
          index
          level
          name
          prerequisites {
            level
            type
          }
          # reference
          feature_specific {
            subfeature_options {
              choose
              from {
                __typename
                index
                name
                url
              }
              type
            }
            expertise_options {
              choose
              from {
                name
                index
                __typename
              }
              type
            }
          }
          url
        }
        index
        prof_bonus
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
        subclass {
          index
          name
        }
      }
      hit_die
      index
      name
      proficiencies {
        index
        name
        # reference {
        #   index
        #   name
        #   type
        #   url
        # }
        type
        url
      }
      proficiency_choices {
        choose
        from {
          index
          name
        }
        type
      }
      saving_throws {
        index
        name
      }
      spellcasting {
        info {
          desc
          name
        }
        level
        spellcasting_ability {
          index
          name
        }
      }
      subclasses {
        index
        name
      }
    }
    race (filter: $race) {
      ability_bonus_options {
        choose
        from {
          bonus
        }
        type
      }
      ability_bonuses {
        ability_score {
          index
          name
        }
        bonus
      }
      age
      alignment
      index
      language_desc
      language_options {
        choose
        from {
          index
          name
        }
        type
      }
      languages {
        index
        name
      }
      name
      size
      size_description
      speed
      starting_proficiencies {
        index
        name
      }
      starting_proficiency_options {
        choose
        from {
          name
          index
          __typename
        }
        type
      }
      subraces {
        index
        name
      }
      traits {
        desc
        index
        name
        proficiencies {
          index
          name
          type
        }
        proficiency_choices {
          choose
          from {
            name
            index
            __typename
          }
          type
        }
        parent {
          index
          name
        }
        trait_specific {
          subtrait_options {
            choose
            from {
              __typename
              index
              name
              url
            }
            type
          }
          spell_options {
            choose
            from {
              name
              index
              __typename
            }
            type
          }
          damage_type {
            index
            name
          }
          breath_weapon {
            name
            desc
            usage {
              type
              times
            }
            dc {
              dc_type {
                index
                name
              }
              success_type
            }
            damage {
              damage_at_character_level
            }
          }
        }
      }
    }
    background(filter: $background) {
      index
      name
      starting_proficiencies {
        index
        name
        # reference {
        #   index
        #   name
        #   type
        # }
        type
      }
      language_options {
        choose
        from {
          index
          name
        }
        type
      }
      starting_equipment {
        equipment {
          index
          name
        }
        quantity
      }
      starting_equipment_options {
        choose
        from {
          quantity
          equipment {
            name
            index
            __typename
        }
        }
        type
      }
      feature {
        name
        desc
      }
      personality_traits {
        choose
        from
        type
      }
      ideals {
        choose
        from {
          desc
          alignments {
            index
            name
          }
        }
        type
      }
      bonds {
        choose
        from
        type
      }
      flaws {
        choose
        from
        type
      }
    }
}`
