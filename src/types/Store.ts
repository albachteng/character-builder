import { AbilityScore } from "./AbilityScore";
import { AbilityScoreTotal } from "./AbilityScoreTotal";
import { CharacterClass } from "./CharacterClass";
import { Race } from "./Race";

export type Store = {
  characterClass: CharacterClass, 
  characterRace: Race,
  characterBackground: string,
  characterStats: AbilityScore,
  characterLevel: number,
  characterSkillProficiencies: any[],
  proficiencyBonus: number,
}
    