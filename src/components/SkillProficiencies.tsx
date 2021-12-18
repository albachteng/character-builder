/* 
responsible for displaying a list of <Proficiency/>s 
takes in stats object and level as props and bonuses
proficiency bonus is mostly based on class and race
*/

import SkillProficiency from './SkillProficiency';
import { useState, useEffect } from 'react';
import type { Skill, AbilityScore, Choice, Race } from '../types';
import { AllSkills, RaceStartingProficiencies } from '../queries';
import { useQuery } from '@apollo/client';
import useOption from '../hooks/useOption';

type Props = {
    choicesArray: Choice[],
    stats: AbilityScore ,
    proficiencyBonus: number
    characterRace: Race 
}

const SkillProficiencies = ({ choicesArray, stats, proficiencyBonus, characterRace}: Props) => {
    const [ allProficiencies, setAllProficiencies] = useState<Skill[]>([])
    
    const { loading, error, data } = useQuery(AllSkills); // purely to save me writing them all out

    const raceStartingProficiencies = useQuery(RaceStartingProficiencies, {
        variables: {"filter": {"index": characterRace}}
    });

    const { selections } = useOption(choicesArray);

    useEffect(() => {
        if (raceStartingProficiencies.data && selections) {
            setAllProficiencies([...selections, ...raceStartingProficiencies?.data?.race?.proficiencies?.filter((proficiency: any) => { 
                // if (proficiency?.name?.slice(0, 7) === `Skill: `) console.log({proficiency});
                return proficiency?.name?.slice(0, 7) === `Skill: `;
            })]);
        }
    }, [raceStartingProficiencies, selections]);

    const proficienciesArray = data?.skills?.map((skill: Skill, index: number) => {
        return (
            <SkillProficiency 
                skill={skill} 
                stat={stats[skill.ability_score.name]} 
                proficiencyBonus={proficiencyBonus} 
                isProficient={allProficiencies.some((e: Skill) => {
                    return e?.name === `Skill: ${skill.name}`
                })}
                key={`${skill.name}${index}`}
                proficiencyFrom={allProficiencies.find((e: Skill) => {
                    return e?.name === `Skill: ${skill.name}`
                })?.__typename}
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