import React, { useState, Suspense } from 'react';
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


// Define a query
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

const FeaturesQuery = graphql`query AppFeaturesQuery ($FilterFindManyFeatureInput: FilterFindManyFeatureInput){
  features(filter: $FilterFindManyFeatureInput) {
    name 
    desc
  }
}`;

function App() {
  
  const getNewCharacterClass = () => {
    return 
  }

  const [characterClass, setCharacterClass] = useState(getRandomClass());
  
  // variable form: {"FilterFindOneClassInput": {"index": "warlock"}}
  const preloadedAppQuery = loadQuery(
    RelayEnvironment, 
    AppQuery,
    {
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

  const stats = [ // TODO: hard-coded for now
    {
    name: 'Strength',
    acronym: 'STR',
    total: 18
    },
    {
      name: 'Constitution',
      acronym: 'CON', 
      total: 14
    },
    {
      name: 'Dexterity',
      acronym: 'DEX', 
      total: 12
    },
    {
      name: 'Intelligence',
      acronym: 'INT', 
      total: 10
    },
    {
      name: 'Wisdom',
      acronym: 'WIS', 
      total: 8
    },
    {
      name: 'Charisma',
      acronym: 'CHA', 
      total: 15
    },
];
  
  const data = usePreloadedQuery(AppQuery, preloadedAppQuery);

  const features = usePreloadedQuery(FeaturesQuery, preloadedFeaturesQuery);
  console.log(features);
  
  const handleClick = () => {
    setCharacterClass(getNewCharacterClass());
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>
          This one is weak, bring me another
        </button>
        <AbilityScores stats={stats}></AbilityScores>
        <Suspense fallback={'Loading...'}>
          <Display data={data} />
          {/* {features && <FeatureDisplay features={features}></FeatureDisplay>} */}
        </Suspense>
      </header>
    </div>
  );
}

export default App;