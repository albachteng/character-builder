/*
responsible for displaying a single proficiency name and score
will need character stats and the name of the skill to render
will also need proficiency bonus which is based on level
*/

import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import useOnClickDescription from '../../hooks/useOnClickDescription';
import { ZeroToTwenty, Skill, AbilityScores } from '../../types';
import dice from '../../utilities/dice';
import type { SkillProficiencyFragment_skill$key } from './__generated__/SkillProficiencyFragment_skill.graphql';

type Props = {
  skillRef: SkillProficiencyFragment_skill$key
  characterLevel: ZeroToTwenty
  characterStats: AbilityScores
  proficiencies: string[]
};

function SkillProficiency({
  skillRef,
  characterLevel,
  characterStats,
  proficiencies,
}: Props) {

  const originMap = (origin: string | undefined) => {
    switch (origin) {
      case 'ClassProficiency_choicesFrom':
        return 'Class Proficiency Option';
      case 'RaceStarting_proficiency_optionsFrom':
        return 'Race Proficiency Option';
      case 'RaceStarting_proficiencies':
        return 'Race Starting Proficiency';
      case 'Proficiency':
        return 'Background Starting Proficiency';
      default:
        return '';
    }
  };

  const skill = useFragment(graphql`
    fragment SkillProficiencyFragment_skill on Skill {
        name
        __typename
        index
        desc
        ability_score {
          name
          index
          __typename
        }
    }`, skillRef)

  const isProficient = proficiencies.includes(skill?.index)
  const proficiencyBonus = Math.floor((7 + characterLevel) / 4);
  const modifier = skill?.ability_score?.name
  const totalBonus = dice.mod(characterStats[modifier]) + (isProficient ? proficiencyBonus : 0);

  const { description, toggleDescription } = useOnClickDescription(skill);

  return (
    <div>
      <li onClick={toggleDescription}>
        {totalBonus >= 0 && '+'}
        {totalBonus}
        :{' '}
        {`${skill?.name} `}
        {/* <span> */}
        {/*   {`${isProficient ? `| Proficient from ${originMap(proficiencyFrom)}` : ''}`} */}
        {/* </span> */}
      </li>
      {description}
    </div>
  );
}

export default SkillProficiency;
