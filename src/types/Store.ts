import { AbilityScore } from "./AbilityScore";
import { CharacterClass } from "./CharacterClass";
import { Race } from "./Race";

export type Store = {
  characterClass: CharacterClass, 
  characterRace: Race,
  characterBackground: string,
  characterStats: AbilityScore,
  characterLevel: number,
  proficiencyBonus: number,
}
    