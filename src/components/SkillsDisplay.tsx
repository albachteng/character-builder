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
    // children: any
}

const SkillsDisplay = ({characterClass, characterStats, proficiencyBonus, characterRace, }: Props) => {

    const { loading, error, data } = useQuery(ClassProficiencyChoices, {
        variables: {"filter": {"index": characterClass}}
    });

    // maps proficiencies to an array of proficiency objects to be rendered in SkillProficiencies
    const proficienciesMap = () => {};

    // maps proficiencyChoices
    const proficiencyChoicesMap = (value: any) => {
        return <p>{value}</p>;
    };

    return (
        <>
            {loading && 'Loading...'}
            {error && 'Whoops! Something went wrong!'}
            {data && (
                <>
                    <SkillProficiencies
                        choicesArray={[]}
                        stats={characterStats}
                        proficiencyBonus={proficiencyBonus}
                    >
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
                            dataType={"proficiency_choices"}
                        />
                        {/* <QueryMap 
                            query={RaceStartingProficiencies}
                            mappingFunc={proficienciesMap}
                            variables={{"filter": {"index": characterRace}}}
                            dataType={"proficiencies"}
                        /> */}
                    </SkillProficiencies>
                </>
            )}
        </>
    );
};

export default SkillsDisplay;