import { useReducer } from 'react';
import dice /*, { limitedRange, LimitedRange } */ from '../utilities/dice';
import {CharacterClass, Race, AbilityScore, Action, Store } from '../types';
// import useSkillProficiencies from './useSkillProficiencies';

/* hook handles the stateful and effectful logic of maintaining the character
 * stats and broad strokes of player choice - race, class, core stats.
 *
 *
 * */ 
const classesIndexArray: CharacterClass[] = [
    'barbarian', 
    'bard', 
    'cleric', 
    'druid', 
    'fighter', 
    'monk', 
    'paladin', 
    'ranger', 
    'sorcerer', 
    'warlock', 
    'wizard',
];

const racesIndexArray: Race[] = [
    'dragonborn', 
    'dwarf', 
    'elf', 
    'gnome', 
    'half-elf', 
    'half-orc', 
    'halfling', 
    'human', 
    'tiefling',
];
const backgroundIndexArray = ['acolyte']; // sadly, the only free option

const getRandom = <T extends unknown>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const emptyStats: AbilityScore = {
  STR: 0,
  CON: 0,
  DEX: 0,
  INT: 0, 
  WIS: 0, 
  CHA: 0,
};

const getRandomStats = (): AbilityScore => {
  let newStats: any = {};
  for (let key in emptyStats) {
    newStats = {...newStats, [key]: dice.rollDice(6, 4, 0, 1)}
  };
  return newStats;
};

const initState: Store = {
  characterClass: getRandom(classesIndexArray), 
  characterRace: getRandom(racesIndexArray),
  characterBackground: getRandom(backgroundIndexArray),
  characterStats: getRandomStats(),
  characterLevel: 1,
  proficiencyBonus: 2,
}

const reducer = (state: Store, action: Action<undefined>) => {
  switch(action.type) {
    
    case 'levelUp': 
      const characterLevel = state.characterLevel + 1;
      const proficiencyBonus = Math.floor((7 + characterLevel) / 4);
      return {...state, characterLevel, proficiencyBonus};

    case 'newCharacter': 
      return {
        characterClass: getRandom(classesIndexArray), 
        characterRace: getRandom(racesIndexArray),
        characterBackground: getRandom(backgroundIndexArray),
        characterStats: getRandomStats(),
        characterLevel: 1,
        proficiencyBonus: 2,
      };

    case 'reroll': 
      return {
        ...state,
        characterStats: getRandomStats()
      }
    case 'resetProficiencies': 
      return {...state, characterSkillProficiencies: []}
    default: 
      return state;
  }
}

const useCharacter = () => {

  const [ state, dispatch ] = useReducer(reducer, initState);

  return {
    state,
    dispatch,
  };
}

export default useCharacter;
