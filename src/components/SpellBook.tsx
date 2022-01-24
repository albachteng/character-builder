import { SpellsOptionsByClassAndLevel } from "../queries";
import { CharacterClass, Spell as SpellType} from "../types";
// import Spell from './Spell';
import QueryWrapper from './QueryWrapper';
import RenderMap, { MappingFunc } from './RenderMap';
import withOnClick from "./withOnClick";
import SpellDetails from './SpellDetails';

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


const SpellBook = ({ characterClass, characterLevel }: Props) => {

    const spellMapFunc: MappingFunc<SpellType> = (spell, index, arr) => {
        const Header = () => <p>{spell.name}{spell.level ? `, Level ${spell.level}` : `, Cantrip`}</p>;
        const SpellDetailsWithOnClick = withOnClick(SpellDetails, Header);
        return <SpellDetailsWithOnClick spell={spell} id={`${spell.name}${index}`} key={`${spell.name}${index}`}/>
    };

    return (
        <ul>
            <QueryWrapper
                query={SpellsOptionsByClassAndLevel}
                variables={buildSpellVariables(characterClass, characterLevel)}
                dataType={['spells']}
            >
                <RenderMap mappingFunc={spellMapFunc} data={{}} sortBy={'levelAsc'} />
            </QueryWrapper> 
        </ul>
    );
};

export default SpellBook;