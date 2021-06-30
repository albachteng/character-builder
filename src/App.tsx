import { useState, Suspense } from 'react';
import './assets/css/App.css';
import graphql from 'babel-plugin-relay/macro';
import {
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import Display from './Display';
import RelayEnvironment from './RelayEnvironment';
import AbilityScores from './AbilityScores';
import FeatureDisplay from './FeaturesDisplay';

const classesIndexArray = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'ranger', 'sorcerer', 'warlock', 'wizard',];
const racesIndexArray = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling',];
const getRandomClass = () => classesIndexArray[Math.floor(Math.random() * classesIndexArray.length)];
const getRandomRace = () => racesIndexArray[Math.floor(Math.random() * racesIndexArray.length)];

function rollDice(dice: number, repeat=1, modifier=0, drop=0) {
  let result = [];
  // repeats and adds a single roll a number of times equal to repeat
  for (let i = 0; i < repeat; i += 1) {
      // represents a single roll of a dice-sided die
      result.push(Math.ceil(Math.random() * dice));
  }
  if (drop) { // sets the lowest number instead to zero, effectively removing it
    result[result.indexOf(Math.min(...result))] = 0;
  }
  // if a modifier is provided, it is added at the end before returning
  return result.reduce((a, b) => a + b) + modifier;
}

const AppQuery = graphql`
query AppQuery ($FilterFindOneClassInput: FilterFindOneClassInput){
  class (filter: $FilterFindOneClassInput) {
    name
    hit_die
    class_levels #url
    saving_throws {
      name
    }
    spells #url
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
  }
}`;

const FeaturesQuery = graphql`
query AppFeaturesQuery ($FilterFindManyFeatureInput: FilterFindManyFeatureInput){
  features(filter: $FilterFindManyFeatureInput) {
    name 
    desc
    level
  }
}`;

const emptyStats = [ // !: hard-coded for now
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
    return {...stat, total: rollDice(6, 4, 0, 1)}
})};

const App = () => {

  const [characterClass, setCharacterClass] = useState(getRandomClass());
  const [characterRace, setCharacterRace] = useState(getRandomRace());
  const [characterLevel, setCharacterLevel] = useState(1);
  const [characterStats, setCharacterStats] = useState(getRandomStats());
   
  // variable form: {"FilterFindOneClassInput": {"index": "warlock"}}
  const preloadedAppQuery = loadQuery(
    RelayEnvironment, 
    AppQuery,
    { // main Query variables
      "FilterFindOneClassInput": {
        "index": characterClass
      }
    });

  const preloadedFeaturesQuery = loadQuery(
    RelayEnvironment,
    FeaturesQuery,
    {
      "FilterFindManyFeatureInput": {
      "class": {
        "index": characterClass
      }}
    }
  );

  
  
  // !
  const data: any = usePreloadedQuery(AppQuery, preloadedAppQuery);

  const rerollStats = () => {
    setCharacterStats(getRandomStats());
  };

  const handleClick = () => {
    setCharacterClass(getRandomClass());
    setCharacterRace(getRandomRace());
    setCharacterLevel(1);
  };

  const levelUp = () => {
    setCharacterLevel(prev => prev + 1);
  };

  return (
    <div className="App">
        <button onClick={handleClick}>This one is weak, bring me another</button>
        <button onClick={levelUp}>Increase this one's power...</button>
        <button onClick={rerollStats}>These stats are bullshit, roll again!</button>
        <h1>Play a fucking {characterRace} {characterClass}, coward!</h1>

        <AbilityScores stats={characterStats}></AbilityScores>

        <Suspense fallback={'Loading...'}>
          <Display data={data} />
          <FeatureDisplay 
            characterLevel={characterLevel}
            featuresQuery={FeaturesQuery}
            preloadedFeaturesQuery={preloadedFeaturesQuery}>
          </FeatureDisplay>
        </Suspense>
      
    </div>
  );
}

export default App;