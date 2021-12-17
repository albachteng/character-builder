/* 
responsible for displaying a list of <Proficiency/>s 
takes in stats object and level as props and bonuses
proficiency bonus is mostly based on class and race
*/

import SkillProficiency from './SkillProficiency';
import type { Skill, AbilityScore, Choice } from '../types';
import { AllSkills } from '../queries';
import { useQuery } from '@apollo/client';
import useOption from '../hooks/useOption';

type Props = {
    choicesArray: Choice[],
    stats: AbilityScore ,
    proficiencyBonus: number
    children: any // !
}

const SkillProficiencies = ({ choicesArray, stats, proficiencyBonus, children }: Props) => {
    
    const { loading, error, data } = useQuery(AllSkills); // purely to save me writing them all out

    console.log({choicesArray});

    const { selections } = useOption(choicesArray);

    console.log({selections});
    const proficienciesArray = data?.skills?.map((skill: Skill, index: number) => {
        return (
            <SkillProficiency 
                skill={skill} 
                stat={stats[skill.ability_score.name]} 
                proficiencyBonus={proficiencyBonus} 
                isProficient={selections.some((e: Choice) => {
                    return e?.name === `Skill: ${skill.name}`
                })}
                key={`${skill.name}${index}`}
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