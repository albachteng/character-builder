/* 
responsible for displaying a single proficiency name and score 
will need character stats and the name of the skill to render
will also need proficiency bonus which is based on level (universally?)
*/
import dice from '../utilities/dice';
import { AbilityScoreTotal, Skill } from '../types';

type Props = {
    stat: AbilityScoreTotal,
    skill: Skill
    proficiencyBonus?: number,
}

const SkillProficiency = ({stat, skill, proficiencyBonus = 2}: Props) => {

    const expand = () => { // TODO abstract this functionality into its own hook
        for (let i = 0; i < skill.desc.length; i += 1) {
            const target = document.getElementById(`${skill.name}-desc ${i}`);
            target && (target.style.display = 'block');
        }
    }

    const description = skill.desc.map((paragraph, i) => {
        return <p style={{display: 'none'}} id={`${skill.name}-desc ${i}`} key={`${skill.name}desc-${i}`}>{paragraph}</p>
    });

    return (
        <div>
            <li onClick={expand}>{dice.mod(stat) + proficiencyBonus}: {skill.name}</li>
            {description}
        </div>
    )
};

export default SkillProficiency;