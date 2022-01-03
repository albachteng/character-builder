import QueryMap, { MappingFunc } from "./QueryMap";
import { ClassSpellSlots } from '../queries';
import { CharacterClass } from "../types";

type Props = {
    characterClass: CharacterClass,
    characterLevel: number
}

const SpellSlots = ({ characterClass, characterLevel }: Props) => {
    
    const mappingFunc: MappingFunc<{[key: string]: any}> = (spellSlot, index) => {
        if (spellSlot.level === characterLevel && spellSlot.spellcasting.spell_slots_level_1) {
            return <pre key={`SpellSlots${index}`}>{JSON.stringify(spellSlot.spellcasting, null, 3)}</pre>
        }
    }

    return (
        <QueryMap
            query={ClassSpellSlots}
            variables={{filter: {index: characterClass }}}
            mappingFunc={mappingFunc}
            dataType={['class', 'class_levels']}
        />
    );
}

export default SpellSlots;