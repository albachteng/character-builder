import { ClassSpellSlots } from '../queries';
import { CharacterClass } from "../types";
import QueryWrapper from "./QueryWrapper";
import RenderMap, { MappingFunc } from './RenderMap';

type Props = {
    characterClass: CharacterClass,
    characterLevel: number
}

const SpellSlots = ({ characterClass, characterLevel }: Props) => {
    
    const mappingFunc: MappingFunc<{[key: string]: any}> = (spellSlot) => {
        if (spellSlot.level === characterLevel && spellSlot.spellcasting.spell_slots_level_1) {
            return <pre>{JSON.stringify(spellSlot.spellcasting, null, 3)}</pre>
        }
    }

    return (
        <QueryWrapper
            query={ClassSpellSlots}
            variables={{filter: {index: characterClass }}}
            dataType={['class', 'class_levels']}
        >
            <RenderMap mappingFunc={mappingFunc} data={{}}/>
        </QueryWrapper>
    );
}

export default SpellSlots;