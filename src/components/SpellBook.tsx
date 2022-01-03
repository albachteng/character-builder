import { SpellsOptionsByClassAndLevel } from "../queries";
import { CharacterClass, FeatureType } from "../types";
import Spell from './Spell';
import QueryMap from './QueryMap';
import * as React from "react";

type Props = { 
    characterClass: CharacterClass,
    characterLevel: number,
}

const buildSpellVariables = (characterClass: string, characterLevel: number) => {
    const variables: {[key: string]: any} = {"filter": {
        "AND": {"classes": {"index": characterClass}},
        "OR": [],
    }};
    for (let i = 0; i <= characterLevel; i += 1) {
        variables.filter.OR.push({"level": i});
    };
    return variables
};

const spellMapFunc = (spell: FeatureType, index: number, arr: FeatureType[]): React.ReactNode => {
    return <Spell spell={spell} key={`${spell.name}${index}`}/>
};

const SpellBook = ({ characterClass, characterLevel }: Props) => {

    return (
        <ul>
            <QueryMap
                query={SpellsOptionsByClassAndLevel}
                variables={buildSpellVariables(characterClass, characterLevel)}
                mappingFunc={spellMapFunc}
                dataType={['spells']}
            /> 
        </ul>
    );
};

export default SpellBook;