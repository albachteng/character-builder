import { CharacterClass, AbilityScore } from '../types';
import useHP from '../hooks/useHP';

type Props = {
    characterStats: AbilityScore,
    characterLevel: number,
    characterClass: CharacterClass,
}

const HitPoints = ({characterStats, characterLevel, characterClass}: Props) => {

    const { HP, conMod, hit_die, rolls } = useHP(characterStats, characterLevel, characterClass)
    return (
        <>
            <h1>HP: {(characterLevel === 1 && conMod < 0) ? HP : HP + (conMod * characterLevel)}</h1>
            <h2>hit_die: {hit_die(characterClass)} + CON mod: {conMod} * level: {characterLevel} + rolls: {JSON.stringify(rolls, null, 2)}</h2>
        </>
    )
}

export default HitPoints;