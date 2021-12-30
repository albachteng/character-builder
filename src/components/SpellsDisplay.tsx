import { CharacterClass } from '../types';
import SpellSlots from './SpellSlots';

type Props = {
    characterClass: CharacterClass,
    characterLevel: number,
}

const SpellsDisplay = ({ characterClass, characterLevel }: Props) => {
    
    return (
        <>
            <h2>Spells Display</h2>
            <SpellSlots
                characterClass={characterClass}
                characterLevel={characterLevel}
            />
        </>
    )
}

export default SpellsDisplay