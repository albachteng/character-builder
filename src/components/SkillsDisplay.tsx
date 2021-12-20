/* renders skill proficiencies display and handles query for class skill choices */ 
import { ClassProficiencyChoices, RaceProficiencyChoices, RaceStartingProficiencies } from "../queries";
import SkillProficiencies from './SkillProficiencies';
import SkillsWrapper from './SkillsWrapper';
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

    const { state, dispatch } = useSkillProficiencies();

    const skillsMapState = (val: Skill, index: number, arr: Skill[]) => {
        dispatch({type: 'isProficient', payload: val.index});
    };

    console.log(state);

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
                        />

                    {/* </SkillsWrapper> */}
                </>
        </>
    );
};

export default SkillsDisplay;