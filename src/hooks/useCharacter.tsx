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

const getRandomClass = () => classesIndexArray[Math.floor(Math.random() * classesIndexArray.length)];
const getRandomRace = () => racesIndexArray[Math.floor(Math.random() * racesIndexArray.length)];

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

  const [characterClass, setCharacterClass] = useState(getRandomClass());
  const [characterRace, setCharacterRace] = useState(getRandomRace());
  const [characterLevel, setCharacterLevel] = useState(1);
  const [characterStats, setCharacterStats] = useState(getRandomStats());
  const [proficiencyBonus, setProficiencyBonus] = useState(2);


  useEffect(() => {
    setProficiencyBonus(Math.floor((7 + characterLevel) / 4));
  }, [characterLevel]);
   
const rerollStats = () => {
    setCharacterStats(getRandomStats());
  };

  const newCharacter = () => {
    // NTS - this does not reroll stats
    setCharacterClass(getRandomClass());
    setCharacterRace(getRandomRace());
    setCharacterLevel(1);
  };

  const levelUp = () => {
    characterLevel <= 20 && setCharacterLevel(prev => prev + 1);
  };


    return {
        characterClass, 
        setCharacterClass,
        characterRace,
        setCharacterRace,
        characterLevel,
        setCharacterLevel,
        characterStats,
        setCharacterStats,
        proficiencyBonus,
        setProficiencyBonus,
        newCharacter,
        levelUp,
        rerollStats,
    };
    
}

export default useCharacter;
