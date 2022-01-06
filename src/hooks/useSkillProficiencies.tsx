import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { BackgroundProficiencies, ClassProficiencyChoices, RaceProficiencyChoices, RaceStartingProficiencies } from "../queries";
import { CharacterClass, Race } from "../types";
import { findArray } from "../utilities/findArray";
import useOption from "./useOption";

const useSkillProficiencies = (characterClass: CharacterClass, characterRace: Race, characterBackground: string) => {

    /* we need to do work on several queries 
    in the future, we can combine these queries into 
    one to make this cleaner and to avoid multiple round trips */ 
    const characterClassChoices = useQuery(ClassProficiencyChoices, {
        variables: {"filter": {"index": characterClass}}
    });
    const characterRaceChoices = useQuery(RaceProficiencyChoices, {
        variables: {"filter": {"index": characterRace}}
    });
    const characterRaceProficiencies = useQuery(RaceStartingProficiencies, {
        variables: {"filter": {"index": characterRace}}
    });
    const characterBackgroundProficiencies = useQuery(BackgroundProficiencies, {
        variables: {"filter": {"index": characterBackground}}
    })

    // must update the choices and get selections before we can set the proficiencies
    const [ choicesArray, setChoicesArray ] = useState<any>([]);
    const { selections } = useOption(choicesArray);
    const [ proficiencies, setProficiencies] = useState<any>([]);

    // when we have the choice arrays, combine them so that useOption can update selections
    useEffect(() => {
        if (!characterClassChoices.loading && !characterRaceChoices.loading) {
            const classArray = findArray(characterClassChoices.data, ['class', 'proficiency_choices']) || [];
            const raceArray = findArray(characterRaceChoices.data, ['race', 'proficiency_choices']) || null;
            setChoicesArray([...classArray, raceArray]);
    }}, [characterRaceChoices, characterClassChoices, characterClass, characterRace]);

    // when we have selections, combine them with racial starting proficiencies and background proficiencies
    useEffect(() => {
        selections && characterRaceProficiencies.data && characterBackgroundProficiencies.data && 
            setProficiencies([
                ...selections, 
                ...findArray(characterRaceProficiencies.data, ['race', 'proficiencies']),
                ...findArray(characterBackgroundProficiencies.data, ['background', 'proficiencies']),
            ]);
    }, [selections, characterRaceProficiencies, characterBackgroundProficiencies])

    return {
        proficiencies,
    }
}

export default useSkillProficiencies;