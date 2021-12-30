import QueryMap from "./QueryMap";
import { ClassSpellSlots } from '../queries';
import { CharacterClass } from "../types";

type Props = {
    characterClass: CharacterClass,
    characterLevel: number
}


const SpellSlots = ({ characterClass, characterLevel }: Props) => {
    
    const mappingFunc = (spellSlot: any) => {
        if (spellSlot.level === characterLevel && spellSlot.spellcasting.cantrips_known) {
            return <pre>{JSON.stringify(spellSlot.spellcasting, null, 3)}</pre>
        }
    }

    return (
        <QueryMap
            query={ClassSpellSlots}
            variables={{
                filter: {index: characterClass }
            }}
            mappingFunc={mappingFunc}
            dataType={['class', 'class_levels']}
        />
    );
}

export default SpellSlots;