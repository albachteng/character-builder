/* renders skill proficiencies display and handles query for class skill choices */ 
import { AllSkills } from "../queries";
import SkillProficiencies from './SkillProficiencies';
import { useQuery } from "@apollo/client";
import type { AbilityScore } from '../types/AbilityScore';
import { CharacterClass, Race, Skill } from "../types";
import useSkillProficiencies from "../hooks/useSkillProficiencies";
import QueryWrapper from './QueryWrapper';
import RenderMap, { MappingFunc } from './RenderMap';
import SkillProficiency from './SkillProficiency';

type Props = {
    characterClass: CharacterClass, 
    characterRace: Race,
    characterStats: AbilityScore,
    proficiencyBonus: number, 
    characterBackground: string,
}

const SkillsDisplay = ({characterClass, characterStats, proficiencyBonus, characterRace, characterBackground}: Props) => {

    const { proficiencies } = useSkillProficiencies(characterClass, characterRace, characterBackground);
    // const { skills } = useSkillProficiencies(characterClass, characterRace, characterBackground);
    // const { loading, error, data } = useQuery(AllSkills);

    const isProficient = (proficiencies: Skill[], skill: Skill): [boolean, string | undefined] => {
        for (let i = 0; i < proficiencies.length; i += 1) {
            if (proficiencies[i] && proficiencies[i].index.slice(6)  === skill.index) {
                return [true, proficiencies[i].__typename];
            }
        }
        return [false, 'undefined'];
    }

    const makeProficienciesArray: MappingFunc<Skill> = (skill, index) => {
        const proficiency = isProficient(proficiencies, skill);
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
    };

    return (
        <>
            {/* { loading && 'Loading...'}
            { error && 'Whoops, something went wrong!'}
            { data && 
                <SkillProficiencies
                    characterStats={characterStats}
                    proficiencyBonus={proficiencyBonus}
                    skillState={proficiencies}
                    allSkills={data.skills}
                />
            } */}
            <h3>Skills 2 son of Skills</h3>
            <QueryWrapper query={AllSkills} variables={{}} dataType={['skills']}>
                <RenderMap mappingFunc={makeProficienciesArray} data={{}}></RenderMap>
            </QueryWrapper>

            {/* <h3>Proficiencies: </h3> */}
            {/* <RenderMap mappingFunc={mappingFunc} data={proficiencies}></RenderMap> */}
        </>
    );
};

export default SkillsDisplay;