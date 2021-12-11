import { Suspense } from 'react';
import { useQuery } from '@apollo/client';
import { CHARACTERCLASSQUERY } from '../queries';
import '../assets/css/App.css';
import Display from './Display';
import AbilityScoresDisplay from './AbilityScoresDisplay';
import FeatureDisplay from './FeaturesDisplay';
import HeaderDisplay from './HeaderDisplay';
import SkillProficienciesDisplay from './SkillProficienciesDisplay';
import HitPoints from './HitPoints';
import ChoicesDisplay from './ChoicesDisplay';
import Inventory from './Inventory';
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

    // variable form: {"FilterFindOneClassInput": {"index": "warlock"}}
    const {loading, error, data} = useQuery(CHARACTERCLASSQUERY, {
        variables: {"FilterFindOneClassInput": {"index": characterClass}}
    });

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
        {/* <ChoicesDisplay title="Proficiency Choices" choicesArray={data?.class.proficiency_choices}/> */}
        <ChoicesDisplay title="Equipment Choices" choicesArray={data?.class.starting_equipment_options}/>
        <Inventory equipmentChoices={data?.class.starting_equipment_options}></Inventory>
        <SkillProficienciesDisplay choicesArray={data?.class.proficiency_choices} proficiencyBonus={proficiencyBonus} stats={characterStats} />
      </Suspense>
    </div>
  );
}

export default App;
