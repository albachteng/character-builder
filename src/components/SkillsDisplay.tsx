/* renders skill proficiencies display and handles query for class skill choices */ 
import { ClassProficiencyChoices, RaceProficiencyChoices, RaceStartingProficiencies } from "../queries";
import SkillProficiencies from './SkillProficiencies';
import SkillsWrapper from './SkillsWrapper';
import QueryMap from "./QueryMap";
import useCharacter from '../hooks/useCharacter';
import { useState, useEffect } from "react";
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

    const { state, dispatch} = useCharacter();

    const [updatingSkills, setUpdatingSkills] = useState(false);
    const [localSkillProfs, setLocalSkillProfs] = useState<any>([]);
    const [readyToDispatch, setReadyToDispatch] = useState(false);
    // const skillsMap = (val: any, index: number, arr: any[]) => <p key={`${index}${val.name}`}>{val.name}</p>;

    const skillsMapState = (val: any, index: number, arr: any[]) => {
        if (!updatingSkills) {
            setReadyToDispatch(false);
            setUpdatingSkills(true);
            const { characterSkillProficiencies } = state;
            if (!characterSkillProficiencies.includes(val)) {
                setLocalSkillProfs((prev: any[]) => {
                    return [...prev, val];
            });
        }
        setUpdatingSkills(false);
    }};

    useEffect(() => {
        if (!updatingSkills && readyToDispatch) {
            setUpdatingSkills(true);
            dispatch({type: 'updateAllSkills', payload: localSkillProfs});
        };
        setUpdatingSkills(false);
    }, [updatingSkills, localSkillProfs, dispatch, readyToDispatch]);

    console.log('skillsdisplay', {skills: state.characterSkillProficiencies});

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
                    {/* <QueryMap2
                        {...[
                            {
                                query:ClassProficiencyChoices,
                                variables: {"filter": {"index": characterClass}},
                                mappingFunc: skillsMap, 
                                dataType: ["class", "proficiency_choices"],
                                useOption: true
                            },
                            {
                                query: RaceProficiencyChoices,
                                variables: {"filter": {"index": characterRace}},
                                mappingFunc: skillsMap, 
                                dataType: ["race", "proficiency_choices"],
                                useOption: true
                            },
                            {
                                query: RaceStartingProficiencies,
                                variables: {"filter": {"index": characterRace}},
                                mappingFunc: skillsMap, 
                                dataType: ["race", "proficiencies"],
                                useOption: false
                            },
                        ]
                    }
                    /> */}
                    {/* <SkillsWrapper> */}
                    <h2>old skills display</h2>
                    <QueryMap 
                        query={ClassProficiencyChoices} 
                        variables={{"filter": {"index": characterClass}}}
                        mappingFunc={skillsMapState}
                        dataType={["class", "proficiency_choices"]}
                        useOption={true}
                        updating={updatingSkills}
                        setReadyToDispatch={setReadyToDispatch}
                        />

                    <QueryMap 
                        query={RaceProficiencyChoices} 
                        variables={{"filter": {"index": characterRace}}}
                        mappingFunc={skillsMapState}
                        dataType={["race", "proficiency_choices"]}
                        useOption={true}
                        setReadyToDispatch={setReadyToDispatch}
                        updating={updatingSkills}/>
                    <QueryMap 
                        query={RaceStartingProficiencies} 
                        variables={{"filter": {"index": characterRace}}}
                        mappingFunc={skillsMapState}
                        dataType={["race", "proficiencies"]}
                        setReadyToDispatch={setReadyToDispatch}
                        updating={updatingSkills}/>
                    {/* </SkillsWrapper> */}
                </>
        </>
    );
};

export default SkillsDisplay;