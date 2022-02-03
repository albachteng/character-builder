export interface AbilityScoreNameObject {
  name: 'CON' | 'DEX' | 'STR' | 'INT' | 'WIS' | 'CHA';
}

export type AbilityScoreName = AbilityScoreNameObject['name'];
