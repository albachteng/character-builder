import { gql } from '@apollo/client';

export const SpellsOptionsByClassAndLevel = gql`query SpellsOptionsByClassAndLevel ($filter: FilterFindManySpellInput) {
    spells (filter: $filter) {
      area_of_effect {
        size
        type
      }
      attack_type
      casting_time
      classes {
        index
      }
      components
      concentration
      damage {
        damage_type {
          name
          index
        }
        damage_at_slot_level
        damage_at_character_level
      }
      dc {
        desc
        dc_type {
          name
          index
        }
        dc_success
      }
      desc
      duration
      heal_at_slot_level
      higher_level
      index
      level
      material
      name
      range
      ritual
      school {
        name
        index
        desc
      }
      subclasses {
        name
        index
        _id
      }
      url
      }
    }
`;