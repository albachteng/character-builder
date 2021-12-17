/* renders skill proficiencies display and handles query for class skill choices */ 

import { ClassProficiencyChoices, RaceProficiencyChoices } from "../queries";
import SkillProficiencies from './SkillProficiencies';
import { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import type { AbilityScore } from '../types/AbilityScore';
import { CharacterClass, Race, Choice } from "../types";

type Props = {
    characterClass: CharacterClass, 
    characterRace: Race,
    characterStats: AbilityScore,
    proficiencyBonus: number, 
}

const SkillsDisplay = ({characterClass, characterStats, proficiencyBonus, characterRace, }: Props) => {

    const classChoices = useQuery(ClassProficiencyChoices, {
        variables: {"filter": {"index": characterClass}}
    });

    const raceChoices = useQuery(RaceProficiencyChoices, {
        variables: {"filter": {"index": characterRace}}
    });

    const [choicesArray, setChoicesArray] = useState<Choice[]>([])

    useEffect(() => {
        if (classChoices.data && raceChoices.data) {
            setChoicesArray([
                ...classChoices?.data?.class?.proficiency_choices, 
                raceChoices?.data?.race?.proficiency_choices,
            ]);
        }
    }, [raceChoices, classChoices]);

    return (
        <>
            {(raceChoices.loading || classChoices.loading) && 'Loading...'}
            {(raceChoices.error || classChoices.error) && 'Whoops! Something went wrong!'}
            {(raceChoices.data && classChoices.data) && (
                <>
                    <SkillProficiencies
                        choicesArray={choicesArray}
                        stats={characterStats}
                        proficiencyBonus={proficiencyBonus}
                    >
                    </SkillProficiencies>
                </>
            )}
        </>
    );
};

export default SkillsDisplay;