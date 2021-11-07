import { gql } from '@apollo/client';

export const CHARACTERCLASSQUERY = gql`
query characterClassQuery ($FilterFindOneClassInput: FilterFindOneClassInput){
  class (filter: $FilterFindOneClassInput) {
    name
    class_levels {
      ability_score_bonuses
      index
      level
      prof_bonus
    }
    saving_throws {
      name
    }
    spells {
      name
      url
    }
    spellcasting {
      spellcasting_ability {
        name
      }
      info {
        name
        desc
      }
      level
    }
  	starting_equipment {
      quantity
      equipment {
        name
      }
    }
    proficiencies {
      name
    }
    proficiency_choices {
      choose
      from {
        name
      }
    }
    starting_equipment_options {
      choose
      from {
        equipment {
          name
        }
        quantity
      }
    }
    subclasses {
      name
    }
    hit_die
  }
}`;
