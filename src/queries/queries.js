import graphql from 'babel-plugin-relay/macro';

graphql`fragment magicAbilities on Class {
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
  
graphql`fragment subclassOptions on Class {
    subclasses {
        name
    }
}`
  
graphql`fragment equipment on Class {
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
  
graphql`fragment proficiencies on Class {
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
  
  
graphql`fragment basicClassInfo on Class {
    name
    hit_die
    class_levels #url
    saving_throws {
        name
    }
}`
  
graphql`query levelsQuery ($FilterFindManyLevelInput: FilterFindManyLevelInput) {
    levels (filter: $FilterFindManyLevelInput) {
        index
        ability_score_bonuses
        prof_bonus
        ...levelFeatureOptions
        ...spellslots
    }
}`
  
graphql`fragment spellslots on Level {
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
  
graphql`fragment levelFeatureOptions on Level {
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
graphql`query levelClassSpecific {
    __type (name: "LevelClass_specific") {
        fields {
            name
            type {
                name
            }
        }  
    }
}`
  
graphql`query FeaturesByClass ($FilterFindManyFeatureInput: FilterFindManyFeatureInput){
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