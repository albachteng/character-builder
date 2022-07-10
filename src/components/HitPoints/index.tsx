import useHP, { Rolls } from '../../hooks/useHP';
import { CharacterClass, AbilityScores, ZeroToTwenty } from '../../types';
import dice from '../../utilities/dice';
import { Tooltip } from '@mantine/core';
import HPDetails from './HPDetails.tsx';
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import type { HitPointsFragment_ruleSection$key } from './__generated__/HitPointsFragment_ruleSection.graphql';
import InfoModal from '../InfoModal';

const calculateHP = (
  characterStats: AbilityScores,
  characterLevel: ZeroToTwenty,
  rolls: Rolls,
) => {
  let total = 0;
  for (let i = 1; i <= characterLevel; i += 1) {
    const toAdd = rolls[i] + dice.mod(characterStats.CON);
    if (toAdd >= 1) total += toAdd;
    // minimum + 1 HP per level
    else total += 1;
  }
  return total;
};

type Props = {
  characterLevel: ZeroToTwenty
  characterClass: CharacterClass
  characterStats: AbilityScores
  ruleSectionRef: HitPointsFragment_ruleSection$key
}

function HitPoints({characterLevel, characterClass, characterStats, ruleSectionRef}: Props) {

  const { index, desc, name } = useFragment(graphql`
    fragment HitPointsFragment_ruleSection on RuleSection {
      index
      desc
      name
    }`, ruleSectionRef);

  const { rolls, getHitDice } = useHP(characterLevel, characterClass);

  return (
    <section className="flex-container">
      <InfoModal label={"Resting"} markdown={desc}/>
      {/* <InfoModal label={"Damage and Healing"} markdown={desc}/> */}
      <Tooltip label={<HPDetails rolls={rolls} CON={dice.mod(characterStats['CON'])}/>}>
        <h1>
          HP: {calculateHP(characterStats, characterLevel, rolls)}
        </h1>
      </Tooltip>

      <h1>
        Hit dice: {characterLevel}d{getHitDice(characterClass)}
      </h1>
    </section>
  );
}

export default HitPoints;
