import { useQuery } from "@apollo/client";
import { useState, useEffect, useReducer } from "react";
import { ClassProficiencyChoices, RaceProficiencyChoices, RaceStartingProficiencies } from "../queries";
import { CharacterClass, Race, SkillIndex } from "../types";
import { findArray } from "../utilities/findArray";
import useOption from "./useOption";

    type SkillAction = 
        {
            type: 'isProficient', 
            payload: SkillIndex
        } | {
            type: 'isNotProficient', 
            payload: SkillIndex
        } | {
            type: 'reset'
        };

    export type SkillProficiencyState= {
        [key in SkillIndex]: boolean;
    }
    
    const initSkills: {[key in SkillIndex]: false} = {
        acrobatics: false,
        'animal-handling': false, 
        arcana: false,
        athletics: false,
        deception: false,
        history: false,
        insight: false,
        intimidation: false,
        investigation: false,
        medicine: false,
        nature: false,
        perception: false,
        performance: false,
        persuasion: false,
        religion: false,
        'slight-of-hand': false,
        stealth: false,
        survival: false,
    }

    const reducer = (state: SkillProficiencyState, action: SkillAction) => {
        switch(action.type) {
            case 'isProficient': 
                return {...state, [action.payload]: true};
            case 'isNotProficient': 
                return {...state, [action.payload]: false};
            case 'reset': 
                return {...initSkills};
            default: 
                return state
        }
    }

const useSkillProficiencies = (characterClass: CharacterClass, characterRace: Race, characterBackground: string) => {

    const characterClassChoices = useQuery(ClassProficiencyChoices, {
        variables: {"filter": {"index": characterClass}}
    });
    const characterRaceChoices = useQuery(RaceProficiencyChoices, {
        variables: {"filter": {"index": characterRace}}
    });
    const characterRaceProficiencies = useQuery(RaceStartingProficiencies, {
        variables: {"filter": {"index": characterRace}}
    });

    const [ choicesArray, setChoicesArray ] = useState<any>([]);
    const { selections } = useOption(choicesArray);
    const [ proficiencies, setProficiencies] = useState<any>([]);

    useEffect(() => {
        if (!characterClassChoices.loading && !characterRaceChoices.loading) {
            const classArray = findArray(characterClassChoices.data, ['class', 'proficiency_choices']) || [];
            const raceArray = findArray(characterRaceChoices.data, ['race', 'proficiency_choices']) || null;
            setChoicesArray([...classArray, raceArray]);
    }}, [characterRaceChoices, characterClassChoices]);

    useEffect(() => {
        selections && characterRaceProficiencies.data && setProficiencies([...selections, ...findArray(characterRaceProficiencies.data, ['race', 'proficiencies'])]);
    }, [selections, characterRaceProficiencies])

    useEffect(() => {
        proficiencies.forEach((proficiency: any) => {
            if (proficiency && initSkills.hasOwnProperty(proficiency.index.slice(6))) {
                dispatch({type: 'isProficient', payload: proficiency.index.slice(6)});
            }
        })
    }, [proficiencies]);

    const [ state, dispatch ] = useReducer(reducer, initSkills);
    console.log(state);

    return {
        state,
        dispatch, 
        setChoicesArray,
        setProficiencies,
    }
}

export default useSkillProficiencies;