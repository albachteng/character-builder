import { Suspense } from 'react';
import '../assets/css/App.css';
import AbilityScoresDisplay from './AbilityScoresDisplay';
import FeatureDisplay from './FeaturesDisplay';
import HeaderDisplay from './HeaderDisplay';
import InventoryDisplay from './InventoryDisplay';
import SkillsDisplay from './SkillsDisplay';
import useCharacter from '../hooks/useCharacter';

const App = () => {

    const {
      state, dispatch
    } = useCharacter();

    const { characterRace, characterBackground, characterClass, characterStats, characterLevel } = state;

    const getNewCharacter = () => {
      dispatch({type: 'newCharacter'});
    }

  return (
    <div className="App">
      <a target="_" href='https://www.dnd5eapi.co/graphql'>GraphQL Playground</a>
      <a target="_" href='https://studio.apollographql.com/sandbox/explorer/?_gl=1*1m2cvlk*_ga*MjA5MTc2OTg3OC4xNjM0MTM3MDc2*_ga_0BGG5V2W2K*MTYzNDIyMzUyNS4yLjEuMTYzNDIyNTEwOC4w'>Apollo Explorer</a>
      <button onClick={getNewCharacter}>This one is weak, bring me another</button>
      <button onClick={() => dispatch({type: 'levelUp'})}>Increase this one's power...</button>
      <button onClick={() => dispatch({type: 'rerollStats'})}>These stats are bullshit, roll again!</button>
      <h1>Play a fucking {state.characterRace} {state.characterClass}, coward!</h1>
      <Suspense fallback={'Suspense Loading...'}>
        <HeaderDisplay background={characterBackground} characterStats={characterStats} characterName='nonsense' characterClass={characterClass} race={characterRace} level={characterLevel}/>
        <AbilityScoresDisplay stats={characterStats} />
        <FeatureDisplay characterBackground={characterBackground} characterRace={characterRace} characterLevel={characterLevel} characterClass={characterClass} />
        <InventoryDisplay characterClass={characterClass} characterBackground={characterBackground}></InventoryDisplay>
        <SkillsDisplay characterBackground={state.characterBackground} characterRace={state.characterRace} characterClass={state.characterClass} proficiencyBonus={state.proficiencyBonus} characterStats={state.characterStats}></SkillsDisplay>
      </Suspense>
    </div>
  );
}

export default App;
