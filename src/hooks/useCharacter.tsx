import { useState, useEffect, useReducer } from 'react';
import dice /*, { limitedRange, LimitedRange } */ from '../utilities/dice';
import {CharacterClass, Race, AbilityScore } from '../types';

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

const useCharacter = () => {

  const [characterClass, setCharacterClass] = useState(getRandom(classesIndexArray));
  const [characterRace, setCharacterRace] = useState(getRandom(racesIndexArray));
  const [characterLevel, setCharacterLevel] = useState(1);
  const [characterStats, setCharacterStats] = useState(getRandomStats());
  const [characterBackground, setCharacterBackground] = useState(getRandom(backgroundIndexArray));
  const [proficiencyBonus, setProficiencyBonus] = useState(2);

  useEffect(() => {
    setProficiencyBonus(Math.floor((7 + characterLevel) / 4));
  }, [characterLevel]);
   
const rerollStats = () => {
    setCharacterStats(getRandomStats());
  };

  const newCharacter = () => {
    // NTS - this does not reroll stats
    setCharacterClass(getRandom(classesIndexArray));
    setCharacterRace(getRandom(racesIndexArray));
    setCharacterLevel(1);
  };

  const levelUp = () => {
    characterLevel <= 20 && setCharacterLevel(prev => prev + 1);
  };

  return {
    characterClass, 
    characterRace,
    characterLevel,
    characterStats,
    characterBackground,
    proficiencyBonus,
    newCharacter,
    levelUp,
    rerollStats,
  };
    
}

export default useCharacter;
