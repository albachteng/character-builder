import { useState, useEffect, Suspense } from 'react';
import '../assets/css/App.css';
import { useQuery } from '@apollo/client';
import Display from './Display';
import AbilityScoresDisplay from './AbilityScoresDisplay';
import FeatureDisplay from './FeaturesDisplay';
import HeaderDisplay from './HeaderDisplay';
import SkillProficienciesDisplay from './SkillProficienciesDisplay';
import dice /*, { limitedRange, LimitedRange } */ from '../utilities/dice';
import HitPoints from './HitPoints';
import { CHARACTERCLASSQUERY } from '../queries/queries';
import {CharacterClass, Race, AbilityScore } from '../types';

const classesIndexArray: CharacterClass[] = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'ranger', 'sorcerer', 'warlock', 'wizard',];
const racesIndexArray: Race[] = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling',];
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

const App = () => {

  const [characterClass, setCharacterClass] = useState(getRandomClass());
  const [characterRace, setCharacterRace] = useState(getRandomRace());
  const [characterLevel, setCharacterLevel] = useState(1);
  const [characterStats, setCharacterStats] = useState(getRandomStats());
  const [proficiencyBonus, setProficiencyBonus] = useState(2);

  useEffect(() => {
    setProficiencyBonus(Math.floor((7 + characterLevel) / 4));
    console.log({proficiencyBonus});
  }, [characterLevel]);
   
  // variable form: {"FilterFindOneClassInput": {"index": "warlock"}}
  const {loading, error, data} = useQuery(CHARACTERCLASSQUERY, {
    variables: {"FilterFindOneClassInput": {"index": characterClass}}
  });

  const rerollStats = () => {
    setCharacterStats(getRandomStats());
  };

  const newCharacter = () => {
    setCharacterClass(getRandomClass());
    setCharacterRace(getRandomRace());
    setCharacterLevel(1);
  };

  const levelUp = () => {
    setCharacterLevel(prev => prev + 1);
  };
  return loading ? 'Loading...' : (
    <div className="App">
      <a target="_" href='https://www.dnd5eapi.co/graphql'>GraphQL Playground</a>
      <br></br>
      <a target="_" href='https://studio.apollographql.com/sandbox/explorer/?_gl=1*1m2cvlk*_ga*MjA5MTc2OTg3OC4xNjM0MTM3MDc2*_ga_0BGG5V2W2K*MTYzNDIyMzUyNS4yLjEuMTYzNDIyNTEwOC4w'>Apollo Explorer</a>
      <br></br>
      <button onClick={newCharacter}>This one is weak, bring me another</button>
      <button onClick={levelUp}>Increase this one's power...</button>
      <button onClick={rerollStats}>These stats are bullshit, roll again!</button>
      <h1>Play a fucking {characterRace} {characterClass}, coward!</h1>
      <Suspense fallback={'Suspense Loading...'}>
        <HeaderDisplay characterName='nonsense' characterClass={characterClass} race={characterRace} level={characterLevel}/>
        <HitPoints hit_die={data?.class.hit_die} CON={characterStats.CON} characterClass={characterClass} level={characterLevel}/>
        <AbilityScoresDisplay stats={characterStats} />
        <Display data={data} />
        <FeatureDisplay characterLevel={characterLevel} characterClass={characterClass} />
        <SkillProficienciesDisplay proficiencyBonus={proficiencyBonus} stats={characterStats} />
      </Suspense>
    </div>
  );
}

export default App;