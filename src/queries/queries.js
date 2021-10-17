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


gql`fragment MagicAbilitiesQuery on Class {
    spells #url
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
}`;
  
gql`fragment SubclassOptionsQuery on Class {
    subclasses {
        name
    }
}`;
  
gql`fragment EquipmentQuery on Class {
    starting_equipment {
        quantity
        equipment {
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
    }}
}`;
  
gql`fragment ProficienciesQuery on Class {
    proficiencies {
        name
    }
    proficiency_choices {
        choose
        from {
            name
        }
    }
}`;
  
export const ALLSKILLS = gql`
query allSkills {
  skills {
    name
    ability_score {
      name
    }
    desc
  }
}`;

gql`fragment BasicClassInfoQuery on Class {
    name
    hit_die
    class_levels #url
    saving_throws {
        name
    }
}`;
  
gql`query LevelsQuery ($FilterFindManyLevelInput: FilterFindManyLevelInput) {
    levels (filter: $FilterFindManyLevelInput) {
        index
        ability_score_bonuses
        prof_bonus
        ...LevelFeatureOptionsQuery
        ...SpellslotsQuery
    }
}`;
  
gql`fragment SpellslotsQuery on Level {
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
}`;
  
gql`fragment LevelFeatureOptionsQuery on Level {
feature_choices {
    name
    url
    }
    features {
    name
    url
    }
}`;
  
//  variable for levels: {"FilterFindManyLevelInput": {
//   "class": {
//       "index": "wizard"}
//   }
// }
  
//   # query the names of the class-specific abilities
// gql`query LevelClassSpecificQuery {
//     __type (name: "LevelClass_specific") {
//         fields {
//             name
//             type {
//                 name
//             }
//         }  
//     }
// }`

export const FEATURES = gql`
query featuresQuery ($FilterFindManyFeatureInput: FilterFindManyFeatureInput){
  features(filter: $FilterFindManyFeatureInput) {
    name 
    desc
    level
  }
}`;

  
// variables: 
// {"FilterFindManyFeatureInput": {
//   "class": {
//     "index": "fighter"
// }}}

gql`fragment HitPointsFragment_class on Class {
    hit_die
}`;