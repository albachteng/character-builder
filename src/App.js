import React, { useState, Suspense } from 'react';
import './assets/css/App.css';
import graphql from 'babel-plugin-relay/macro';
import {
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import Display from './Display';
import RelayEnvironment from './RelayEnvironment';

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



// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.


// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App(props) {
  
  const getNewCharacterClass = () => {
    return {
      "FilterFindOneClassInput": {
        "index": getRandomClass()
      }
    }
  }

  const [characterClass, setCharacterClass] = useState(getNewCharacterClass());
  // variable form: {"FilterFindOneClassInput": {"index": "warlock"}}
  const preloadedQuery = loadQuery(
    RelayEnvironment, 
    AppQuery,
    characterClass);

  
  const data = usePreloadedQuery(AppQuery, preloadedQuery);
  
  const handleClick = () => {
    setCharacterClass(getNewCharacterClass());
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>
          This one is weak, bring me another
        </button>
        <Suspense fallback={'Loading...'}>
          <Display data={data} />
        </Suspense>
      </header>
    </div>
  );
}

export default App;