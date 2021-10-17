/* 
responsible for displaying a single proficiency name and score 
will need character stats and the name of the skill to render
will also need proficiency bonus which is based on level (universally?)
*/
import dice from './utilities/dice';
import { AbilityScoreTotal, Skill } from './types';

type Props = {
    stat: AbilityScoreTotal,
    skill: Skill
    proficiencyBonus?: number,
}

const SkillProficiency = ({stat, skill, proficiencyBonus = 2}: Props) => {
    return (
        <li>{dice.mod(stat) + proficiencyBonus}: {skill.name}</li>
    )
};

export default SkillProficiency;