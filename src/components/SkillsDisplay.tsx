/* renders skill proficiencies display and handles query for class skill choices */ 

import { ClassProficiencyChoices, RaceProficiencyChoices, RaceStartingProficiencies } from "../queries";
import SkillProficiencies from './SkillProficiencies';
import SkillsWrapper from './SkillsWrapper';
import QueryMap from "./QueryMap";
// import { useState, useEffect } from "react";
// import { useQuery } from '@apollo/client';
import type { AbilityScore } from '../types/AbilityScore';
import { CharacterClass, Race, Choice } from "../types";

type Props = {
    characterClass: CharacterClass, 
    characterRace: Race,
    characterStats: AbilityScore,
    proficiencyBonus: number, 
    characterBackground: string,
}

const SkillsDisplay = ({characterClass, characterStats, proficiencyBonus, characterRace, characterBackground}: Props) => {

    // const classChoices = useQuery(ClassProficiencyChoices, {
    //     variables: {"filter": {"index": characterClass}}
    // });

    // const raceChoices = useQuery(RaceProficiencyChoices, {
    //     variables: {"filter": {"index": characterRace}}
    // });

    // const [choicesArray, setChoicesArray] = useState<Choice[]>([])

    // useEffect(() => {
    //     if (classChoices.data && raceChoices.data) {
    //         setChoicesArray([
    //             ...classChoices?.data?.class?.proficiency_choices, 
    //             raceChoices?.data?.race?.proficiency_choices,
    //         ]);
    //     }
    // }, [raceChoices, classChoices]);

    const skillsMap = (val: any, index: number, arr: any[]) => <p key={`${index}${val.name}`}>{val.name}</p>;

    return (
        <>
            {/* {(raceChoices.loading || classChoices.loading) && 'Loading...'}
            {(raceChoices.error || classChoices.error) && 'Whoops! Something went wrong!'}
            {(raceChoices.data && classChoices.data) && ( */}
                <>
                    {/* <h2>Skills</h2>
                    <SkillProficiencies
                        choicesArray={choicesArray}
                        stats={characterStats}
                        proficiencyBonus={proficiencyBonus}
                        characterRace={characterRace}
                        characterBackground={characterBackground}
                    /> */}
                    <h2>another skills display?</h2>
                    <SkillsWrapper>
                        <QueryMap 
                            query={ClassProficiencyChoices} 
                            variables={{"filter": {"index": characterClass}}}
                            mappingFunc={skillsMap}
                            dataType={["class", "proficiency_choices"]}
                            useOption={true}/>
                        <QueryMap 
                            query={RaceProficiencyChoices} 
                            variables={{"filter": {"index": characterRace}}}
                            mappingFunc={skillsMap}
                            dataType={["race", "proficiency_choices"]}
                            useOption={true}/>
                        <QueryMap 
                            query={RaceStartingProficiencies} 
                            variables={{"filter": {"index": characterRace}}}
                            mappingFunc={skillsMap}
                            dataType={["race", "proficiencies"]}/>
                    </SkillsWrapper>
                </>
        </>
    );
};

export default SkillsDisplay;