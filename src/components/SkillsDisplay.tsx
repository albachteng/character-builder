/* renders skill proficiencies display and handles query for class skill choices */ 

import { PROFICIENCYCHOICES } from "../queries/ProficiencyChoices";
import SkillProficienciesDisplay from './SkillProficienciesDisplay';
import { useQuery } from '@apollo/client';
import type { AbilityScore } from '../types/AbilityScore';

type Props = {
    characterClass: string
    characterStats: AbilityScore,
    proficiencyBonus: number, 
}

const SkillsDisplay = ({characterClass, characterStats, proficiencyBonus}: Props) => {

    const { loading, error, data } = useQuery(PROFICIENCYCHOICES, {
        variables: {"filter": {"index": characterClass}}
    });

    return (
        <>
            {loading && 'Loading...'}
            {error && 'Whoops! Something went wrong!'}
            {data && (
                <SkillProficienciesDisplay 
                    choicesArray={data.class.proficiency_choices}
                    stats={characterStats}
                    proficiencyBonus={proficiencyBonus}
                ></SkillProficienciesDisplay>
            )}
        </>
    );
};

export default SkillsDisplay;