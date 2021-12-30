/* renders skill proficiencies display and handles query for class skill choices */ 
import { AllSkills } from "../queries";
import SkillProficiencies from './SkillProficiencies';
import { useQuery } from "@apollo/client";
import type { AbilityScore } from '../types/AbilityScore';
import { CharacterClass, Race } from "../types";
import useSkillProficiencies from "../hooks/useSkillProficiencies";

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
        </>
    );
};

export default SkillsDisplay;