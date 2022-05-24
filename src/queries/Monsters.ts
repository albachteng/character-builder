import { gql } from '@apollo/client'

export const Monsters = gql`query Monsters($sort: SortFindManyMonsterInput) {
    monsters(sort: $sort) {
      name
      index
      actions {
        name
        desc
        attack_bonus
        damage {
          damage_dice
          damage_type {
            index
            name
          }
        }
        dc {
          dc_type {
            index
            name
          }
          dc_value
          success_type
        }
        options {
          choose
          from {
            name
            count
            type
          }
        }
        usage {
          type
          dice
          min_value
        }
        attack_options {
          choose
          type
          from {
            name
          }
        }
        attacks {
          name
        }
      }
      alignment
      armor_class
      challenge_rating
      charisma
      condition_immunities {
        index
        name
      }
      constitution
      damage_immunities
      damage_resistances
      damage_vulnerabilities
      dexterity
      forms {
        index
        name
      }
      hit_dice
      hit_points
      intelligence
      languages
      legendary_actions {
        name
        desc
        attack_bonus
      }
      proficiencies {
        proficiency {
          index
          name
        }
        value
      }
      reactions {
        name
        desc
      }
      senses {
        blindsight
        darkvision
        passive_perception
        tremorsense
        truesight
      }
      size
      special_abilities {
        name
        desc
        attack_bonus
        spellcasting {
          level
          ability {
            index
            name
          }
          dc
          modifier
          components_required
          school
          slots
          spells {
            name
            level
            notes
          }
        }
        usage {
          type
          times
          rest_types
        }
      }
      speed {
        burrow
        climb
        fly
        hover
        swim
        walk
      }
      strength
      subtype
      type
      wisdom
      xp
    }
  }`