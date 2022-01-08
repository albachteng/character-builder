/* renders skill proficiencies display and handles query for class skill choices */ 
import { AllSkills } from "../queries";
import SkillProficiencies from './SkillProficiencies';
import { useQuery } from "@apollo/client";
import type { AbilityScore } from '../types/AbilityScore';
import { CharacterClass, Race, /* Skill */} from "../types";
import useSkillProficiencies from "../hooks/useSkillProficiencies";
// import QueryWrapper from './QueryWrapper';
// import RenderMap, { MappingFunc } from './RenderMap';

type Props = {
    characterClass: CharacterClass, 
    characterRace: Race,
    characterStats: AbilityScore,
    proficiencyBonus: number, 
    characterBackground: string,
}

const SkillsDisplay = ({characterClass, characterStats, proficiencyBonus, characterRace, characterBackground}: Props) => {

    const { proficiencies } = useSkillProficiencies(characterClass, characterRace, characterBackground);
    const { loading, error, data } = useQuery(AllSkills);

    // const mappingFunc: MappingFunc<Skill> = (skill) => {
    //     return (<li>{skill.name}</li>);
    // }

    return (
        <>
            { loading && 'Loading...'}
            { error && 'Whoops, something went wrong!'}
            { data && 
                <SkillProficiencies
                    characterStats={characterStats}
                    proficiencyBonus={proficiencyBonus}
                    skillState={proficiencies}
                    allSkills={data.skills}
                />
            }
            {/* <QueryWrapper query={AllSkills} variables={{}} dataType={['skills']}>
                <QueryRender mappingFunc={mappingFunc} data={{}}></QueryRender>
            </QueryWrapper> */}
        </>
    );
};

export default SkillsDisplay;