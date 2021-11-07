/* 
responsible for displaying a list of <Proficiency/>s 
takes in stats object and level as props and bonuses
proficiency bonus is mostly based on class and race
these should probably be separated from other kinds of proficiencies, so maybe "SkillProficienciesDisplay"
*/

import SkillProficiency from './SkillProficiency';
import { Skill, AbilityScore } from './types';
import { ALLSKILLS } from './queries/queries';
import { useQuery } from '@apollo/client';

type Props = {
    stats: AbilityScore 
}

const SkillProficienciesDisplay = ({ stats }: Props) => {
    
    const { loading, error, data } = useQuery(ALLSKILLS);

    const proficienciesArray: JSX.Element[] = []
    // TODO props.map((stat) => <Proficiency/>)
    data?.skills?.map((skill: Skill) => {
        proficienciesArray.push(<SkillProficiency skill={skill} stat={stats[skill.ability_score.name]}/>)
    })

    return(
        <div>
            <ul>
                {proficienciesArray}
            </ul>
        </div>
    )
};

export default SkillProficienciesDisplay;