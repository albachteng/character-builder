import { ReactNode } from 'react';
import { AbilityScores } from '../types';
import Stat from './Stat';

type Props = {
  stats: AbilityScores;
};

const AbilityScoresDisplay = ({ stats }: Props) => {
  const scores: ReactNode[] = [];
  let key: keyof AbilityScores;
  for (key in stats) {
    scores.push(
      <Stat name={key} key={`${key}${stats[key]}`} stats={stats[key]}></Stat>
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {scores}
    </div>
  );
};

export default AbilityScoresDisplay;
