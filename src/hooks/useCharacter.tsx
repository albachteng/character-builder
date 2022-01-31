import { useReducer } from 'react';
import dice /*, { limitedRange, LimitedRange } */ from '../utilities/dice';
import {CharacterClass, Race, AbilityScores, Action, Store, ZeroToTwenty } from '../types';
import { Background } from '../types/Background';
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
const backgroundIndexArray: Background[] = ['acolyte']; // sadly, the only free option

const getRandom = <T extends unknown>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const emptyStats: AbilityScores = {
  STR: 0,
  CON: 0,
  DEX: 0,
  INT: 0, 
  WIS: 0, 
  CHA: 0,
};

const getRandomStats = (): AbilityScores => {
  let newStats = {};
  for (let key in emptyStats) {
    newStats = {...newStats, [key]: dice.rollDice(6, 4, 0, 1)}
  };
  return newStats as AbilityScores;
};

const initState: Store = {
  characterClass: getRandom(classesIndexArray), 
  characterRace: getRandom(racesIndexArray),
  characterBackground: getRandom(backgroundIndexArray),
  characterStats: getRandomStats(),
  characterLevel: 1,
  proficiencyBonus: 2,
}

const reducer = (state: Store, action: Action<never>): Store => {
  switch(action.type) {
    
    case 'levelUp': 
      if (state.characterLevel < 20) {
        const characterLevel = state.characterLevel + 1 as ZeroToTwenty;
        const proficiencyBonus = Math.floor((7 + characterLevel) / 4);
        return {...state, characterLevel, proficiencyBonus};
      }
      else return state;

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
