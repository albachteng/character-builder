import useOnClickDescription from "../hooks/useOnClickDescription";
import { SpellsOptionsByClassAndLevel } from "../queries";
import { CharacterClass } from "../types";
import Spell from './Spell';
import QueryMap from './QueryMap';

type Props = { 
    characterClass: CharacterClass,
    characterLevel: number,
}

const buildSpellVariables = (characterClass: string, characterLevel: number) => {
    const variables: any = {"filter": {
        "AND": {"classes": {"index": characterClass}},
        "OR": [],
    }};
    for (let i = 0; i <= characterLevel; i += 1) {
        variables.filter.OR.push({"level": i});
    };
    return variables
};

const SpellBook = ({ characterClass, characterLevel }: Props) => {

    const spellMapFunc = (spell: {[key: string]: any, desc: string[]}, index: number, arr: any[]) => {
        return <Spell spell={spell} key={`${spell.name}${index}`}/>
    };

    return (
        <QueryMap
            query={SpellsOptionsByClassAndLevel}
            variables={buildSpellVariables(characterClass, characterLevel)}
            mappingFunc={spellMapFunc}
            dataType={['spells']}
        /> 
    );
};

export default SpellBook;