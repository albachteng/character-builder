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

    proficiencyFrom = proficiencyFrom ? proficiencyFrom : 'undefined';

    const originMap = (origin: string) => {
        switch  (origin) {
            case 'ClassProficiency_choicesFrom': 
                return 'Class Proficiency Option';
            case 'RaceStarting_proficiency_optionsFrom':
                return 'Race Proficiency Option'
            case 'RaceStarting_proficiencies':
                return 'Race Starting Proficiency'
            default:
                return ''
        }
    }

    const { description, toggleDescription } = useOnClickDescription(skill);

    return (
        <div>
            <li onClick={toggleDescription}>
                {dice.mod(stat) + (isProficient ? proficiencyBonus : 0)}: {skill.name}  
                {` Stat (${skill.ability_score.name}-${stat}) mod: ${dice.mod(stat)} ${isProficient ? `+ ${proficiencyBonus} ` : ' '}`}
                Proficient: {`${isProficient ? `Yes, from ${originMap(proficiencyFrom)}` : "No"}`}
            </li>
            {description}
        </div>
    )
};

export default SkillProficiency;