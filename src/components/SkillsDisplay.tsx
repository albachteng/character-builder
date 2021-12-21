/* renders skill proficiencies display and handles query for class skill choices */ 
import { ClassProficiencyChoices, RaceProficiencyChoices, RaceStartingProficiencies } from "../queries";
import SkillProficiencies from './SkillProficiencies';
import QueryMap from "./QueryMap";
import useCharacter from '../hooks/useCharacter';
import { useState, useEffect } from "react";
// import { useQuery } from '@apollo/client';
import type { AbilityScore } from '../types/AbilityScore';
import { CharacterClass, Race, Choice, SkillName, CoreSkills, Skill } from "../types";
import useSkillProficiencies from "../hooks/useSkillProficiencies";

type Props = {
    characterClass: CharacterClass, 
    characterRace: Race,
    characterStats: AbilityScore,
    proficiencyBonus: number, 
    characterBackground: string,
}

const SkillsDisplay = ({characterClass, characterStats, proficiencyBonus, characterRace, characterBackground}: Props) => {

    const { state, dispatch } = useSkillProficiencies(characterClass, characterRace, characterBackground);

    return (
        <>
        {/* <SkillProficiencies

        /> */}
                    {/* <QueryMap 
                        query={ClassProficiencyChoices} 
                        variables={{}}
                        mappingFunc={skillsMapState}
                        dataType={["class", "proficiency_choices"]}
                        useOption={true}
                        />

                    <QueryMap 
                        query={RaceProficiencyChoices} 
                        variables={{"filter": {"index": characterRace}}}
                        mappingFunc={skillsMapState}
                        dataType={["race", "proficiency_choices"]}
                        useOption={true}
                        />

                    <QueryMap 
                        query={RaceStartingProficiencies} 
                        variables={{"filter": {"index": characterRace}}}
                        mappingFunc={skillsMapState}
                        dataType={["race", "proficiencies"]}
                        /> */}
        </>
    );
};

export default SkillsDisplay;