/* renders skill proficiencies display and handles query for class skill choices */ 

import { ClassProficiencyChoices, RaceProficiencyChoices, RaceStartingProficiencies } from "../queries";
import SkillProficiencies from './SkillProficiencies';
import QueryMap from './QueryMap';
import { useQuery } from '@apollo/client';
import type { AbilityScore } from '../types/AbilityScore';
import { CharacterClass, Race } from "../types";

type Props = {
    characterClass: CharacterClass, 
    characterRace: Race,
    characterStats: AbilityScore,
    proficiencyBonus: number, 
}

const SkillsDisplay = ({characterClass, characterStats, proficiencyBonus, characterRacestring}: Props) => {

    const { loading, error, data } = useQuery(ClassProficiencyChoices, {
        variables: {"filter": {"index": characterClass}}
    });

    const proficienciesMap = () => {};

    return (
        <>
            {loading && 'Loading...'}
            {error && 'Whoops! Something went wrong!'}
            {data && (
                <>
                    <SkillProficiencies
                        choicesArray={data.class.proficiency_choices}
                        stats={characterStats}
                        proficiencyBonus={proficiencyBonus}
                    ></SkillProficiencies>
                    <QueryMap
                        query={ClassProficiencyChoices}
                        mappingFunc={proficiencyChoicesMap}
                        variables={{"filter": {"index": characterClass}}}
                        dataType={"proficiency_choices"}
                        />
                    <QueryMap 
                        query={RaceProficiencyChoices}
                        mappingFunc={proficiencyChoicesMap}
                        variables={{"filter": {"index": characterRace}}}
                    />
                </>
            )}
        </>
    );
};

export default SkillsDisplay;