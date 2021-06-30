import graphql from 'babel-plugin-relay/macro';

graphql`fragment queriesMagicAbilitiesQuery on Class {
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
}`
  
graphql`fragment queriesSubclassOptionsQuery on Class {
    subclasses {
        name
    }
}`
  
graphql`fragment queriesEquipmentQuery on Class {
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
}`
  
graphql`fragment queriesProficienciesQuery on Class {
    proficiencies {
        name
    }
    proficiency_choices {
        choose
        from {
            name
        }
    }
}`
  
  
graphql`fragment queriesBasicClassInfoQuery on Class {
    name
    hit_die
    class_levels #url
    saving_throws {
        name
    }
}`
  
graphql`query queriesLevelsQuery ($FilterFindManyLevelInput: FilterFindManyLevelInput) {
    levels (filter: $FilterFindManyLevelInput) {
        index
        ability_score_bonuses
        prof_bonus
        ...queriesLevelFeatureOptionsQuery
        ...queriesSpellslotsQuery
    }
}`
  
graphql`fragment queriesSpellslotsQuery on Level {
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
}`
  
graphql`fragment queriesLevelFeatureOptionsQuery on Level {
feature_choices {
    name
    url
    }
    features {
    name
    url
    }
}`
  
//  variable for levels: {"FilterFindManyLevelInput": {
//   "class": {
//       "index": "wizard"}
//   }
// }
  
//   # query the names of the class-specific abilities
// graphql`query queriesLevelClassSpecificQuery {
//     __type (name: "LevelClass_specific") {
//         fields {
//             name
//             type {
//                 name
//             }
//         }  
//     }
// }`
  
graphql`query queriesFeaturesByClassQuery ($FilterFindManyFeatureInput: FilterFindManyFeatureInput){
    features(filter: $FilterFindManyFeatureInput) {
        name 
        desc
    }
}`
  
// variables: 
// {"FilterFindManyFeatureInput": {
//   "class": {
//     "index": "fighter"
// }}}