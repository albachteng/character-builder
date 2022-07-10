import { ZeroToTwenty } from '../../../types';
import type { ProficiencyBonusFragment_ruleSections$key } from './__generated__/ProficiencyBonusFragment_ruleSections.graphql';
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import InfoModal from '../InfoModal';

type Props = {
  characterLevel: ZeroToTwenty
  proficiencyRulesRef: ProficiencyBonusFragment_ruleSections$key
}

function ProficiencyBonus({ characterLevel, proficiencyRulesRef}: Props) {

  const proficiencyBonus = Math.floor((7 + Number(characterLevel)) / 4);

  const { desc, name } = useFragment(graphql`
    fragment ProficiencyBonusFragment_ruleSections on RuleSection {
      desc
      name
    }`, proficiencyRulesRef);

  return (
    <div>
      <h1>Proficiency Bonus: {proficiencyBonus} <InfoModal label={name} markdown={desc}/></h1>
    </div>
  )
}

export default ProficiencyBonus;
