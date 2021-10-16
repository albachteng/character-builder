import { useState, Suspense } from 'react';
import './assets/css/App.css';
import { gql, useQuery } from '@apollo/client';
import Display from './Display';
import AbilityScores from './AbilityScores';
import FeatureDisplay from './FeaturesDisplay';
import dice, { limitedRange, LimitedRange } from './utilities/dice';
import HitPoints from './HitPoints';

export type CharacterClass = 'barbarian' | 'bard'| 'cleric'| 'druid'| 'fighter'| 'monk'| 'paladin'| 'ranger'| 'ranger'| 'sorcerer'| 'warlock'| 'wizard'; 
export type Race = 'dragonborn'| 'dwarf'| 'elf'| 'gnome'| 'half-elf'| 'half-orc'| 'halfling'| 'human'| 'tiefling';
export interface AbilityScore {
  name: 'Constitution' | 'Dexterity' | 'Strength' | 'Intelligence' | 'Wisdom' | 'Charisma',
  acronym: 'CON' | 'DEX' | 'STR' | 'INT' | 'WIS' | 'CHA',
  total: number
};

const classesIndexArray: CharacterClass[] = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'ranger', 'sorcerer', 'warlock', 'wizard',];
const racesIndexArray: Race[] = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling',];
const getRandomClass = () => classesIndexArray[Math.floor(Math.random() * classesIndexArray.length)];
const getRandomRace = () => racesIndexArray[Math.floor(Math.random() * racesIndexArray.length)];



const CHARACTERCLASSQUERY = gql`
query characterClassQuery ($FilterFindOneClassInput: FilterFindOneClassInput){
  class (filter: $FilterFindOneClassInput) {
    name
    class_levels {
      ability_score_bonuses
      index
      level
      prof_bonus
    }
    saving_throws {
      name
    }
    spells {
      name
      url
    }
    spellcasting {
      spellcasting_ability {
        name
      }
      info {
        name
        desc
      }
      level
    }
  	starting_equipment {
      quantity
      equipment {
        name
      }
    }
    proficiencies {
      name
    }
    proficiency_choices {
      choose
      from {
        name
      }
    }
    starting_equipment_options {
      choose
      from {
        equipment {
          name
        }
        quantity
      }
    }
    subclasses {
      name
    }
    hit_die
  }
}`;

const FEATURES = gql`
query featuresQuery ($FilterFindManyFeatureInput: FilterFindManyFeatureInput){
  features(filter: $FilterFindManyFeatureInput) {
    name 
    desc
    level
  }
}`;

const emptyStats: AbilityScore[] = [
  {
    name: 'Strength',
    acronym: 'STR',
    total: 0
  },
  {
    name: 'Constitution',
    acronym: 'CON', 
    total: 0
  },
  {
    name: 'Dexterity',
    acronym: 'DEX', 
    total: 0
  },
  {
    name: 'Intelligence',
    acronym: 'INT', 
    total: 0
  },
  {
    name: 'Wisdom',
    acronym: 'WIS', 
    total: 0
  },
  {
    name: 'Charisma',
    acronym: 'CHA', 
    total: 0
  },
];

const getRandomStats = () => {
  return emptyStats.map((stat) => {
    return {...stat, total: dice.rollDice(6, 4, 0, 1)}
})};

const App = () => {

  const [characterClass, setCharacterClass] = useState(getRandomClass());
  const [characterRace, setCharacterRace] = useState(getRandomRace());
  const [characterLevel, setCharacterLevel] = useState(1);
  const [characterStats, setCharacterStats] = useState(getRandomStats());
   
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
  console.log(data);
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
          <HitPoints 
          hit_die={1}
          CON={characterStats[1].total} 
          characterClass={characterClass}
          level={characterLevel}/>
        <AbilityScores stats={characterStats}></AbilityScores>
        <Display data={data} />
        <FeatureDisplay characterLevel={characterLevel} featuresQuery={FEATURES} characterClass={characterClass}>
        </FeatureDisplay>
      </Suspense>
    </div>
  );
}

export default App;