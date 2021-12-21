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
    characterStats: AbilityScore,
    proficiencyBonus: number,
    skillState: SkillProficiencyState 
}

const SkillProficiencies = ({ characterStats, proficiencyBonus, skillState }: Props) => {

    const [ allProficiencies, setAllProficiencies] = useState<Skill[]>([])
    const { loading, error, data } = useQuery(AllSkills); // purely to save me writing them all out

    useEffect(() => { 
        if (data) {
            setAllProficiencies(
                data.skills.filter((skill: Skill) => skillState.hasOwnProperty(skill.index)));
        }
    }, [data, skillState]);

    const proficienciesArray = allProficiencies.map((skill: Skill, index: number) => {
        return (
            <SkillProficiency 
                skill={skill} 
                stat={characterStats[skill?.ability_score?.name]} 
                proficiencyBonus={proficiencyBonus} 
                isProficient={skillState[skill.index]}
                key={`${skill.name}${index}`}
                proficiencyFrom={allProficiencies.find((proficiency: Skill) => {
                    return proficiency?.name === `Skill: ${skill.name}`
                })?.__typename || undefined}
            />
        );
    });

    return(
        
        <div>
            {loading && "Loading..."}
            {error && "Whoops, something went wrong!"}
            <ul>
                {proficienciesArray}
            </ul>
        </div>
    )
};

export default SkillProficiencies;