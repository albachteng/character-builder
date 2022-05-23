import { ReactNode, useContext } from 'react';
import CharacterContext from '../CharacterContext';
import { AbilityScores } from '../../types';
import Stat from './Stat';
import { Character } from '../../queries/Character';

function AbilityScoresDisplay() {

  const { characterStats } = useContext(CharacterContext);

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
