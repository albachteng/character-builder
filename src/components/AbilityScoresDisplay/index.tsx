import { graphql } from 'babel-plugin-relay/macro';
import { ReactNode } from 'react';
import { useFragment } from 'react-relay';
import { AbilityScores } from '../../types';
import InfoModal from '../InfoModal';
import Stat from './Stat';
import type {  AbilityScoresDisplayFragment_query$key } from './__generated__/AbilityScoresDisplayFragment_query.graphql';
import type { AbilityScoresDisplayFragment_ruleSections$key } from './__generated__/AbilityScoresDisplayFragment_ruleSections.graphql';

type Props = {
  characterStats: AbilityScores
  queryRef: AbilityScoresDisplayFragment_query$key
  abilityScoresRuleRef: AbilityScoresDisplayFragment_ruleSections$key
}

function AbilityScoresDisplay({characterStats, queryRef, abilityScoresRuleRef}: Props) {

  const { abilityScores } = useFragment(graphql`
    fragment AbilityScoresDisplayFragment_query on Query {
      abilityScores {
        index
        ...StatFragment_ability_score
      }
    }`, queryRef);

  const { desc, name } = useFragment(graphql`
    fragment AbilityScoresDisplayFragment_ruleSections on RuleSection {
      index
      name
      desc
    }`, abilityScoresRuleRef);

  const scores = abilityScores.map((abilityScore) => {

    const { index } = abilityScore;

    return <Stat
        key={index}
        statRef={abilityScore}
        score={characterStats[index?.toUpperCase()]}
      />
  });

  return (
    <section className="ability-scores-display">
      {scores}
      <InfoModal label={name} markdown={desc}/>
    </section>
  );
}

export default AbilityScoresDisplay;
