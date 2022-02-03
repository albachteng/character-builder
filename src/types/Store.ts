import { AbilityScores } from './AbilityScores';
import { ZeroToTwenty } from './ZeroToTwenty';
import { Background } from './Background';
import { CharacterClass } from './CharacterClass';
import { Race } from './Race';

export type Store = {
  characterClass: CharacterClass;
  characterRace: Race;
  characterBackground: Background;
  characterStats: AbilityScores;
  characterLevel: ZeroToTwenty;
  proficiencyBonus: number;
};
