/* 
responsible for displaying a list of <Proficiency/>s 
takes in stats object and level as props and bonuses
proficiency bonus is mostly based on class and race
these should probably be separated from other kinds of proficiencies, so maybe "SkillProficienciesDisplay"
*/

import SkillProficiency from './SkillProficiency';
import { Skill, AbilityScore } from '../types';
import { ALLSKILLS } from '../queries';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import useOption from '../hooks/useOption';
interface choice {
    [key: string]: any, // can we rule out that the choices will have other fields? 
    choose: number,
    from: any[] // ! 
}

type Props = {
    choicesArray: choice[],
    stats: AbilityScore ,
    proficiencyBonus: number
}

const SkillProficienciesDisplay = ({ choicesArray, stats, proficiencyBonus }: Props) => {
    
    const { loading, error, data } = useQuery(ALLSKILLS);
    const {choose, selections} = useOption();

    useEffect(() => {
        choose(choicesArray);
    }, []);

    

    const proficienciesArray = data?.skills?.map((skill: Skill) => {
        console.log({selections});
        console.log({skill});
        return (
            data && selections && <SkillProficiency 
                skill={skill} 
                stat={stats[skill.ability_score.name]} 
                proficiencyBonus={proficiencyBonus} 
                isProficient={selections.includes({
                    __typename: "ClassProficiency_choicesFrom",
                    name: `Skill: ${skill.name}`
                })}
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

export default SkillProficienciesDisplay;