import { SpellModByClass } from '../queries';
import { AbilityScore, CharacterClass } from '../types';
import SpellSlots from './SpellSlots';
import QueryMap, { MappingFunc } from './QueryMap';
import dice from '../utilities/dice';
import { ability_score_abbr } from '../types/ability_score';
import SpellBook from './SpellBook';

type Props = {
    characterClass: CharacterClass,
    characterLevel: number,
    characterStats: AbilityScore
}

type SpellMod = {
    [key: string]: any,
    name: ability_score_abbr
}


const SpellsDisplay = ({ characterClass, characterLevel, characterStats }: Props) => {

    const spellModMapFunc: MappingFunc<SpellMod> = (item, index, arr) => {
        return <p>{item.name}: {dice.mod(characterStats[item.name])} </p>
    };   

    return (
        <>
            <h2>Spells Display</h2>
            <h3>Spell Slots</h3>
            <SpellSlots
                characterClass={characterClass}
                characterLevel={characterLevel}
            />
            <h3>Spell Mod</h3>
            <QueryMap
                query={SpellModByClass}
                variables={{filter: { index: characterClass}}}
                mappingFunc={spellModMapFunc}
                dataType={['class', 'spellcasting', 'spellcasting_ability']}
            />
            <h3>Spellbook</h3>
            <SpellBook characterClass={characterClass} characterLevel={characterLevel}/>
        </>
    )
}

export default SpellsDisplay;