/* 
responsible for displaying a single proficiency name and score 
will need character stats and the name of the skill to render
will also need proficiency bonus which is based on level 
*/

import dice from '../utilities/dice';
import { ZeroToTwenty, Skill } from '../types';
import useOnClickDescription from '../hooks/useOnClickDescription';

type Props = {
    stat: ZeroToTwenty,
    skill: Skill
    proficiencyBonus?: number,
    isProficient: boolean,
    proficiencyFrom?: string, 
}

const SkillProficiency = ({stat, skill, proficiencyBonus = 2, isProficient, proficiencyFrom}: Props) => {

    const originMap = (origin: string | undefined) => {
        switch  (origin) {
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
    }

    const { description, toggleDescription } = useOnClickDescription(skill);

    const bonus = dice.mod(stat) + (isProficient ? proficiencyBonus : 0);

    return (
        <div>
            <li onClick={toggleDescription}>
                {bonus >= 0 && '+'}{bonus}: {skill.name + ' '}
                <span>{`${isProficient ? `| Proficient from ${originMap(proficiencyFrom)}` : ''}`}</span>
            </li>
            {description}
        </div>
    )
};

export default SkillProficiency;