/* renders skill proficiencies display and handles query for class skill choices */ 
import { AllSkills } from "../queries";
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
    console.log(proficiencies);
    const isProficient = (proficiencies: Skill[], skill: Skill): [boolean, string | undefined] => {
        for (let i = 0; i < proficiencies.length; i += 1) {
            if (proficiencies[i] && proficiencies[i].index && proficiencies[i].index.slice(6)  === skill.index) {
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
            <QueryWrapper query={AllSkills} variables={{}} dataType={['skills']}>
                <RenderMap mappingFunc={makeProficienciesArray} />
            </QueryWrapper>
        </>
    );
};

export default SkillsDisplay;