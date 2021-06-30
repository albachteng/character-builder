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
    level
  }
}`;

const App = () => {

  const [characterClass, setCharacterClass] = useState(getRandomClass());
  const [characterRace, setCharacterRace] = useState(getRandomRace());
  const [characterLevel, setCharacterLevel] = useState(1);
   
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

  const stats = [ // !: hard-coded for now
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
  
  // !
  const data: any = usePreloadedQuery(AppQuery, preloadedAppQuery);

  const handleClick = () => {
    setCharacterClass(getRandomClass());
  }

  return (
    <div className="App">
      
        <button onClick={handleClick}>
          This one is weak, bring me another
        </button>
        <AbilityScores stats={stats}></AbilityScores>
        <Suspense fallback={'Loading...'}>
          <Display data={data} />
          <FeatureDisplay 
            featuresQuery={FeaturesQuery}
            preloadedFeaturesQuery={preloadedFeaturesQuery}>
          </FeatureDisplay>
        </Suspense>
      
    </div>
  );
}

export default App;