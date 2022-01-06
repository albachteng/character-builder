import { CharacterClass, AbilityScore } from '../types';
import useHP, { Rolls } from '../hooks/useHP';
import dice from '../utilities/dice';

type Props = {
    characterStats: AbilityScore,
    characterLevel: number,
    characterClass: CharacterClass,
}

const calculateHP = (characterClass: CharacterClass, characterStats: AbilityScore, characterLevel: number, rolls: Rolls) => {
    let total = 0;
    for (let i = 1; i <= characterLevel; i += 1) {
        const toAdd = rolls[i] + dice.mod(characterStats['CON']);
        if (toAdd >= 1) total += toAdd;
        else total += 1;
    }
    return total;
};

const HitPoints = ({characterStats, characterLevel, characterClass}: Props) => {

    const { rolls, calculateHitDice } = useHP(characterStats, characterLevel, characterClass)

    return (
        <>
            <h1>HP: {calculateHP(characterClass, characterStats, characterLevel, rolls)}</h1>
            <h2>
                hit die: {calculateHitDice(characterClass)} 
                + CON mod: {dice.mod(characterStats['CON'])} 
                * level: {characterLevel} 
                + rolls: {JSON.stringify(rolls, null, 2)}
            </h2>
        </>
    )
}

export default HitPoints;