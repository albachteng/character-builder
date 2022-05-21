import { Suspense, useMemo } from 'react';

import Personality from './Personality';
import '../assets/css/App.css';
import useCharacter from '../hooks/useCharacter';
import { CharacterClass } from '../types';
import AbilityScoresDisplay from './AbilityScoresDisplay';
import FeatureDisplay from './FeaturesDisplay';
import HeaderDisplay from './HeaderDisplay';
import InventoryDisplay from './InventoryDisplay';
import ItemStore from './ItemStore';
import SkillsDisplay from './SkillsDisplay';
import SpellsDisplay from './SpellsDisplay';

function App() {
  const { state, dispatch } = useCharacter();
  const {
    proficiencyBonus,
    characterRace,
    characterBackground,
    characterClass,
    characterStats,
    characterLevel,
  } = state;

  // Two fighter and rogue archetypes DO get spellcasting - Eldritch Knight and Arcane Trickster
  const isSpellcaster = (characterClass: CharacterClass) => {
    const whiteList = [
      'bard',
      'cleric',
      'druid',
      'paladin',
      'ranger',
      'sorcerer',
      'warlock',
      'wizard', /* 'fighter', 'rogue' */
    ];
    return whiteList.includes(characterClass);
  };

  const MyPersonality = useMemo(() => <Personality/>, [characterBackground, characterClass])
  return (
    <div id="App">
      <a target="_" href="https://www.dnd5eapi.co/graphql">
        GraphQL Playground
      </a>
      <a
        target="_"
        href="https://studio.apollographql.com/sandbox/explorer/?_gl=1*1m2cvlk*_ga*MjA5MTc2OTg3OC4xNjM0MTM3MDc2*_ga_0BGG5V2W2K*MTYzNDIyMzUyNS4yLjEuMTYzNDIyNTEwOC4w"
      >
        Apollo Explorer
      </a>
      <button onClick={() => dispatch({ type: 'newCharacter' })}>
        This one is weak, bring me another
      </button>
      <button onClick={() => dispatch({ type: 'levelUp' })}>
        Increase this one's power...
      </button>
      <button onClick={() => dispatch({ type: 'reroll' })}>
        These stats are bullshit, roll again!
      </button>
      <h1>
        Play a fucking
        {' '}
        {state.characterRace}
        {' '}
        {state.characterClass}
        , coward!
      </h1>
      {MyPersonality}
      <Suspense fallback="Suspense Loading...">
        <HeaderDisplay
          // background={characterBackground}
          characterStats={characterStats}
          characterName="nonsense"
          characterClass={characterClass}
          race={characterRace}
          level={characterLevel}
        />


        <AbilityScoresDisplay stats={characterStats} />

        <FeatureDisplay
          characterBackground={characterBackground}
          characterRace={characterRace}
          characterLevel={characterLevel}
          characterClass={characterClass}
        />

        <ItemStore 
          characterClass={characterClass}
          characterBackground={characterBackground}
          />
        <InventoryDisplay
          characterClass={characterClass}
          characterBackground={characterBackground}
        />

        <SkillsDisplay
          characterBackground={characterBackground}
          characterRace={characterRace}
          characterClass={characterClass}
          proficiencyBonus={proficiencyBonus}
          characterStats={characterStats}
        />

        {isSpellcaster(characterClass) && (
          <SpellsDisplay
            characterStats={characterStats}
            characterClass={characterClass}
            characterLevel={characterLevel}
          />
        )}
      </Suspense>
    </div>
  );
}

export default App;
