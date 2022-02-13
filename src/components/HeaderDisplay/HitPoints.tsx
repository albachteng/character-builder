import { CharacterClass, AbilityScores, ZeroToTwenty } from '../../types';
import useHP, { Rolls } from '../../hooks/useHP';
import dice from '../../utilities/dice';

type Props = {
  characterStats: AbilityScores;
  characterLevel: ZeroToTwenty;
  characterClass: CharacterClass;
};

const calculateHP = (
  characterStats: AbilityScores,
  characterLevel: number,
  rolls: Rolls
) => {
  let total = 0;
  for (let i = 1; i <= characterLevel; i += 1) {
    const toAdd = rolls[i] + dice.mod(characterStats['CON']);
    if (toAdd >= 1) total += toAdd;
    // minimum + 1 HP per level, regardless of roll and mod
    else total += 1;
  }
  return total;
};

const HitPoints = ({
  characterStats,
  characterLevel,
  characterClass
}: Props) => {
  const { rolls, calculateHitDice } = useHP(characterLevel, characterClass);

  return (
    <>
      <h1>HP: {calculateHP(characterStats, characterLevel, rolls)}</h1>
      <h1>
        Hit dice: {characterLevel}d{calculateHitDice(characterClass)}
      </h1>
    </>
  );
};

export default HitPoints;
