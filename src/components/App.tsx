import { Suspense } from 'react';
import { useQuery } from '@apollo/client';
import { CHARACTERCLASSQUERY } from '../queries';
import '../assets/css/App.css';
import AbilityScoresDisplay from './AbilityScoresDisplay';
import FeatureDisplay from './FeaturesDisplay';
import HeaderDisplay from './HeaderDisplay';
import SkillProficienciesDisplay from './SkillProficienciesDisplay';
import Inventory from './Inventory';
import Skills from './Skills';
import useCharacter from '../hooks/useCharacter';

const App = () => {

    const {
        characterClass,
        characterRace,
        characterLevel,
        characterStats,
        proficiencyBonus,
        newCharacter,
        levelUp,
        rerollStats,
    } = useCharacter();

  return (
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

        <HeaderDisplay characterStats={characterStats} characterName='nonsense' characterClass={characterClass} race={characterRace} level={characterLevel}/>
        
        <AbilityScoresDisplay stats={characterStats} />

        <FeatureDisplay characterLevel={characterLevel} characterClass={characterClass} />

        <Inventory characterClass={characterClass}></Inventory>

        <Skills characterClass={characterClass} proficiencyBonus={proficiencyBonus} characterStats={characterStats}></Skills>
      </Suspense>
    </div>
  );
}

export default App;
