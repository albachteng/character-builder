/* 
responsible for displaying a single proficiency name and score 
will need character stats and the name of the skill to render
will also need proficiency bonus which is based on level 
*/

import dice from '../utilities/dice';
import { AbilityScoreTotal, Skill } from '../types';
import useOnClickDescription from '../hooks/useOnClickDescription';

type Props = {
    stat: AbilityScoreTotal,
    skill: Skill
    proficiencyBonus?: number,
    isProficient?: boolean,
    proficiencyFrom?: string, 
}

const SkillProficiency = ({stat, skill, proficiencyBonus = 2, isProficient, proficiencyFrom}: Props) => {

    const { description, toggleDescription } = useOnClickDescription(skill);

    return (
        <div>
            <li onClick={toggleDescription}>
                {dice.mod(stat) + (isProficient ? proficiencyBonus : 0)}: {skill.name}  
                {` Stat (${skill.ability_score.name}-${stat}) mod: ${dice.mod(stat)} ${isProficient ? `+ ${proficiencyBonus} ` : ' '}`}
                Proficient: {`${isProficient ? `Yes, from ${proficiencyFrom}` : "No"}`}
            </li>
            {description}
        </div>
    )
};

export default SkillProficiency;