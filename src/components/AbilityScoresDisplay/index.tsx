import { ReactNode, useContext } from 'react';
import CharacterContext from '../CharacterContext';
import { AbilityScores } from '../../types';
import Stat from './Stat';
// import { CharacterQuery } from '../../queries/Character';

type Props = {
  characterStats: AbilityScores
}

function AbilityScoresDisplay({characterStats}: Props) {

  const scores: ReactNode[] = [];

  let key: keyof AbilityScores;

  for (key in characterStats) {
    scores.push(
      <Stat name={key} key={`${key}${characterStats[key]}`} stats={characterStats[key]} />,
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {scores}
    </div>
  );
}

export default AbilityScoresDisplay;
