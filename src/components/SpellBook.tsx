import { SpellsOptionsByClassAndLevel } from "../queries";
import { CharacterClass, Spell as SpellType} from "../types";
import Spell from './Spell';
import QueryWrapper from './QueryWrapper';
import RenderMap, { MappingFunc } from './RenderMap';

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

const spellMapFunc: MappingFunc<SpellType> = (spell, index, arr) => {
    return <Spell spell={spell} id={`${spell.name}${index}`} key={`${spell.name}${index}`}/>
};

const SpellBook = ({ characterClass, characterLevel }: Props) => {

    return (
        <ul>
            <QueryWrapper
                query={SpellsOptionsByClassAndLevel}
                variables={buildSpellVariables(characterClass, characterLevel)}
                dataType={['spells']}
                // sortBy={'levelAsc'}
            >
                <RenderMap mappingFunc={spellMapFunc} data={{}} />
            </QueryWrapper> 
        </ul>
    );
};

export default SpellBook;