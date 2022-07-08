import { graphql } from 'babel-plugin-relay/macro';
import { ReactNode } from 'react';
import { useFragment } from 'react-relay';
import { AbilityScores } from '../../types';
import Stat from './Stat';
import type {  AbilityScoresDisplayFragment_query$key } from './__generated__/AbilityScoresDisplayFragment_query.graphql';

type Props = {
  characterStats: AbilityScores
  queryRef: AbilityScoresDisplayFragment_query$key
}

function AbilityScoresDisplay({characterStats, queryRef}: Props) {

  const { abilityScores } = useFragment(graphql`
    fragment AbilityScoresDisplayFragment_query on Query {
      abilityScores {
        index
        ...StatFragment_ability_score
      }
    }`, queryRef);

  const scores: ReactNode[] = [];

  let key: keyof AbilityScores;

  for (key in characterStats) {
    scores.push(
      <Stat
        name={key}
        key={key}
        statRef={abilityScores.find((stat) => stat.index === key)}
        score={characterStats[key]}
      />,
    );
  }

  return (
    <section style={{ display: 'flex', justifyContent: 'space-around' }}>
      {scores}
    </section>
  );
}

export default AbilityScoresDisplay;
