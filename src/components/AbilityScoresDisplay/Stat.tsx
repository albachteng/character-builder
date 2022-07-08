import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { ZeroToTwenty } from '../../types';
import dice from '../../utilities/dice';
import type { StatFragment_ability_score$key } from './__generated__/StatFragment_ability_score.graphql';

type Props = {
  name: string;
  statRef: StatFragment_ability_score$key
  score: ZeroToTwenty;
};

function Stat({ name, score, statRef }: Props): JSX.Element {

  const stat = useFragment(graphql`
    fragment StatFragment_ability_score on AbilityScore {
      desc
      full_name
      index
      name
      skills {
        index
      }
    }`, statRef);

  return (
    <div>
      <h4>
        <strong>
          {name}
          :
          {score >= 10 ? '+' : ''}
        </strong>
        {dice.mod(score)}
        ;
      </h4>
      <p>
        Total:
        {score}
      </p>
    </div>
  );
}

export default Stat;
