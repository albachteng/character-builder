import { gql } from "@apollo/client";

export const Spells = gql`
  query Spells($classAndLevel: FilterFindManySpellInput) {
    spells(filter: $classAndLevel, sort: INDEX_ASC) {
      area_of_effect {
        size
        type
      }
      attack_type
      casting_time
      classes {
        index
        name
      }
      components
      concentration
      damage {
        damage_at_slot_level
        damage_at_character_level
        damage_type {
          index
          name
        }
      }
      dc {
        dc_success
        dc_type {
          index
          name
        }
        desc
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
        desc
        index
        name
      }
      subclasses {
        index
        name
      }
    }
  }
`;

/* VARS: 

{

  "classAndLevel": {

    "AND": [
      {
        "classes":  {
          "index": "bard"
        }
      }, 
      {
        "OR": [
          {
            "level": 0
          }, 
          {
              "level": 1
          }, 
          ...etc.
          ]
      }
    ]
  }
}

*/
