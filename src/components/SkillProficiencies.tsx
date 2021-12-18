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
import useOption from '../hooks/useOption';

type Props = {
    choicesArray: Choice[],
    stats: AbilityScore ,
    proficiencyBonus: number,
    characterRace: Race,  
    characterBackground: string
}

const SkillProficiencies = ({ choicesArray, stats, proficiencyBonus, characterRace, characterBackground}: Props) => {

    const [ allProficiencies, setAllProficiencies] = useState<Skill[]>([])
    const { loading, error, data } = useQuery(AllSkills); // purely to save me writing them all out
    const raceStartingProficiencies = useQuery(RaceStartingProficiencies, {
        variables: {"filter": {"index": characterRace}}
    });
    const backgroundProficiencies = useQuery(BackgroundProficiencies, {
        variables: {"filter": {"index": characterBackground }}
    });
    const { selections } = useOption(choicesArray);

    useEffect(() => {
        if (backgroundProficiencies.data && raceStartingProficiencies.data && selections) {
            setAllProficiencies([
                ...selections, 
                ...backgroundProficiencies?.data?.background?.starting_proficiencies, 
                ...raceStartingProficiencies?.data?.race?.proficiencies?.filter((proficiency: any) => { 
                    return proficiency?.name?.slice(0, 7) === `Skill: `;
            })]);
        }
    }, [raceStartingProficiencies, selections, backgroundProficiencies]);

    const proficienciesArray = data?.skills?.map((skill: Skill, index: number) => {
        return (
            <SkillProficiency 
                skill={skill} 
                stat={stats[skill.ability_score.name]} 
                proficiencyBonus={proficiencyBonus} 
                isProficient={allProficiencies.some((proficiency: Skill) => {
                    return proficiency?.name === `Skill: ${skill.name}`
                })}
                key={`${skill.name}${index}`}
                proficiencyFrom={allProficiencies.find((proficiency: Skill) => {
                    return proficiency?.name === `Skill: ${skill.name}`
                })?.__typename}
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