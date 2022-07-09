import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { ZeroToTwenty } from '../../types';
import dice from '../../utilities/dice';
import type { StatFragment_ability_score$key } from './__generated__/StatFragment_ability_score.graphql';
import { Tooltip } from '@mantine/core';
import { Hammer, Heart, Wind, Wand, Leaf, Flower } from 'tabler-icons-react';

type Props = {
  statRef: StatFragment_ability_score$key
  score: ZeroToTwenty;
};

function getIcon(index: string) {
  switch (index) {
    case "str":
      return <Hammer className="flex-item"/>
      break
    case "con":
      return <Heart className="flex-item"/>
      break
    case "dex":
      return <Wind className="flex-item"/>
      break
    case "int":
      return <Wand className="flex-item"/>
      break
    case "wis":
      return <Leaf className="flex-item"/>
      break
    case "cha":
      return <Flower className="flex-item"/>
      break
  }
}

function Stat({ score, statRef }: Props): JSX.Element {

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
    <Tooltip closeDelay={100} transitionDuration={200} wrapLines width={400} label={stat.desc}>
      <h4 className="stat">
        <div>
          {getIcon(stat?.index)}
        </div>
        <strong>
          {stat.index?.toUpperCase()}:
        </strong>
        <div>{score}</div>
        <div>
        {' '}({score >= 10 ? '+' : ''}{dice.mod(score)})
        </div>
      </h4>
    </Tooltip>
  );
}

export default Stat;
