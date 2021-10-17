export type CharacterClass = 'barbarian' | 'bard'| 'cleric'| 'druid'| 'fighter'| 'monk'| 'paladin'| 'ranger'| 'ranger'| 'sorcerer'| 'warlock'| 'wizard'; 

export type Race = 'dragonborn'| 'dwarf'| 'elf'| 'gnome'| 'half-elf'| 'half-orc'| 'halfling'| 'human'| 'tiefling';

export type Level = number;

export type AbilityScoreTotal = number;

export type AbilityScore = {
  [key in 'CON' | 'DEX' | 'STR' | 'INT' | 'WIS' | 'CHA']: AbilityScoreTotal
};

export interface FeatureType {
    name: string,
    desc: string[],
    level: Level
}

export type SkillName = 
    'Acrobatics' | 
    'Animal Handling' | 
    'Arcana' |
    'Athletics' |
    'Deception' | 
    'History' | 
    'Insight' | 
    'Intimidation' | 
    'Investigation' | 
    'Medicine' | 
    'Nature' | 
    'Perception' | 
    'Performance' | 
    'Persuasion' | 
    'Religion' | 
    'Slight of Hand' | 
    'Stealth' | 
    'Survival'
;

interface ability_score {
  name: 'CON' | 'DEX' | 'STR' | 'INT' | 'WIS' | 'CHA',
}

export type Skill = {
  name: SkillName,
  ability_score: ability_score
  desc: string[],
}