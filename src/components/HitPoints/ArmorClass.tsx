import { AbilityScores } from '../../../types';
import dice from '../../utilities/dice';

type Props = {
  characterStats: AbilityScores
}

function ArmorClass({characterStats}: Props) {

  const AC = 10 + dice.mod(characterStats.DEX)

  return (
    <div>
      <h1>AC: {AC}</h1>
    </div>
  )
}

export default ArmorClass;
