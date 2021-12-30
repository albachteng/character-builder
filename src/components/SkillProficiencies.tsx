/* 
responsible for displaying a list of <Proficiency/>s 
takes in stats object and level as props and bonuses
proficiency bonus is mostly based on class and race
*/

import SkillProficiency from './SkillProficiency';
import { useState, useEffect } from 'react';
import type { Skill, AbilityScore, Choice, Race } from '../types';
import { AllSkills, RaceStartingProficiencies, BackgroundProficiencies } from '../queries';
import { useQuery } from '@apollo/client';
import { SkillProficiencyState } from '../hooks/useSkillProficiencies';

type Props = {
    characterStats: any,
    proficiencyBonus: number,
    skillState: Skill[] ,
    allSkills: Skill[]
}

const SkillProficiencies = ({ characterStats, proficiencyBonus, skillState, allSkills}: Props) => {

    // const [ allProficiencies, setAllProficiencies] = useState<Skill[]>([])
    // const { loading, error, data } = useQuery(AllSkills); // purely to save me writing them all out

    // useEffect(() => { 
    //     if (data) {
    //         setAllProficiencies(
    //             data.skills.filter((skill: Skill) => skillState.hasOwnProperty(skill.index)));
    //     }
    // }, [data, skillState]);

    const isProficient = (proficiencies: Skill[], skill: Skill): [boolean, string | undefined] => {
        for (let i = 0; i < proficiencies.length; i += 1) {
            if (proficiencies[i]) console.log('compare: ', proficiencies[i].index, skill.index);
            if (proficiencies[i] && proficiencies[i].index.slice(6)  === skill.index) {
                return [true, proficiencies[i].__typename];
            }
        }
        return [false, 'undefined'];
    }

    const proficienciesArray = allSkills.map((skill: Skill, index: number) => {
        const proficiency = isProficient(skillState, skill);
        return (
            <SkillProficiency 
                skill={skill} 
                stat={characterStats[skill?.ability_score?.name]} 
                proficiencyBonus={proficiencyBonus} 
                isProficient={proficiency[0]}
                key={`${skill.name}${index}`}
                proficiencyFrom={proficiency[1]}
            />
        );
    });

    return(
        
        <div>
            <ul>
                {proficienciesArray}
            </ul>
        </div>
    )
};

export default SkillProficiencies;