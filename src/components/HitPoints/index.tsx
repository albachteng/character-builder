import useHP, { Rolls } from '../../hooks/useHP';
import { CharacterClass, AbilityScores, ZeroToTwenty } from '../../types';
import dice from '../../utilities/dice';
import { Tooltip } from '@mantine/core';
import HPDetails from './HPDetails.tsx';
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import type { HitPointsRestingFragment_ruleSections$key } from './__generated__/HitPointsRestingFragment_ruleSections.graphql';
import type { HitPointsDamageFragment_ruleSections$key } from './__generated__/HitPointsDamageFragment_ruleSections.graphql';
import InfoModal from '../InfoModal';
import ProficiencyBonus from './ProficiencyBonus';
import ArmorClass from './ArmorClass';
import type { ProficiencyBonusFragment_ruleSections$key } from './__generated__/ProficiencyBonusFragment_ruleSections.graphql';

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
  restingRulesRef: HitPointsFragment_ruleSections$key
  damageRulesRef: HitPointsFragment_ruleSections$key
  proficiencyRulesRef: ProficiencyBonusFragment_ruleSections$key
}

function HitPoints({ characterLevel, characterClass, characterStats, restingRulesRef, damageRulesRef, proficiencyRulesRef }: Props) {

  const { desc, name } = useFragment(graphql`
    fragment HitPointsRestingFragment_ruleSections on RuleSection {
      desc
      name
    }`, restingRulesRef);

  const { desc: damageDesc, name: damageName } = useFragment(graphql`
    fragment HitPointsDamageFragment_ruleSections on RuleSection {
      desc
      name
    }`, damageRulesRef);

  const { rolls, getHitDice } = useHP(characterLevel, characterClass);

  return (
    <section className="hit-points flex-container">
      <div>
        <Tooltip label={
          <HPDetails
            rolls={rolls}
            CON={dice.mod(characterStats['CON'])}
            />
        }>
          <h1>
            HP: {calculateHP(characterStats, characterLevel, rolls)}
          </h1>
        </Tooltip>{' '}
        <InfoModal label={damageName} markdown={damageDesc}/>
      </div>

      <h1>
        Hit dice: {characterLevel}d{getHitDice(characterClass)}{' '}
        <InfoModal label={name} markdown={desc}/>
      </h1>
      <ProficiencyBonus proficiencyRulesRef={proficiencyRulesRef} characterLevel={characterLevel}/>
      <ArmorClass characterStats={characterStats}/>
    </section>
  );
}

export default HitPoints;
