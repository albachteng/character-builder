/* 
responsible for displaying a list of <Proficiency/>s 
takes in stats object and level as props and bonuses
proficiency bonus is mostly based on class and race
*/

import SkillProficiency from './SkillProficiency';
import type { Skill, AbilityScore, choice } from '../types';
import { AllSkills } from '../queries';
import { useQuery } from '@apollo/client';
import useOption from '../hooks/useOption';

type Props = {
    choicesArray: choice[],
    stats: AbilityScore ,
    proficiencyBonus: number
}

const SkillProficiencies = ({ choicesArray, stats, proficiencyBonus }: Props) => {
    
    const { loading, error, data } = useQuery(AllSkills);
    const { selections } = useOption(choicesArray);

    const proficienciesArray = data?.skills?.map((skill: Skill) => {
        return (
            <SkillProficiency 
                skill={skill} 
                stat={stats[skill.ability_score.name]} 
                proficiencyBonus={proficiencyBonus} 
                isProficient={selections.some((e: choice) => {
                    return e?.name === `Skill: ${skill.name}`
                })}
            />
        );
    });

    return(
        
        <div>
            {loading && <h3>Loading...</h3>}
            {error && <h3>Whoops, something went wrong!</h3>}
            <ul>
                {proficienciesArray}
            </ul>
        </div>
    )
};

export default SkillProficiencies;