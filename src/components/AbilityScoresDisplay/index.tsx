import { graphql } from 'babel-plugin-relay/macro';
import { ReactNode } from 'react';
import { useFragment } from 'react-relay';
import { AbilityScores } from '../../types';
import InfoModal from '../InfoModal';
import Stat from './Stat';
import type {  AbilityScoresDisplayFragment_query$key } from './__generated__/AbilityScoresDisplayFragment_query.graphql';

type Props = {
  characterStats: AbilityScores
  queryRef: AbilityScoresDisplayFragment_query$key
}

function AbilityScoresDisplay({characterStats, queryRef}: Props) {

  const { abilityScores, ruleSections } = useFragment(graphql`
    fragment AbilityScoresDisplayFragment_query on Query {
      abilityScores {
        index
        ...StatFragment_ability_score
      }
      ruleSections (filter: {OR: [{index: "ability-scores-and-modifiers"}, {index: "resting"}]}){
        index
        name
        desc
      }
    }`, queryRef);


  const scores = abilityScores.map((abilityScore) => {

    const { index } = abilityScore;

    return <Stat
        key={index}
        statRef={abilityScore}
        score={characterStats[index?.toUpperCase()]}
      />
  });

  const desc = ruleSections.find((section) => section?.index === 'ability-scores-and-modifiers')?.desc;

  return (
    <section className="ability-scores-display">
      {scores}
      <InfoModal label={"Ability Scores and Modifiers"} markdown={desc}/>
    </section>
  );
}

export default AbilityScoresDisplay;
