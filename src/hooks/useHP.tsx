import { useState, useEffect } from "react";
import { AbilityScore, CharacterClass } from "../types";
import dice from "../utilities/dice";

const useHP = (characterStats: AbilityScore, characterLevel: number, characterClass: CharacterClass) => {

    const hit_die = (characterClass: string): number => {
        switch (characterClass) {
            case "barbarian":
                return 12;
            case "cleric":
                return 8;
            case "bard":
                return 8;
            case "druid":
                return 8;
            case "fighter":
                return 10;
            case "paladin":
                return 10;
            case "monk":
                return 8;
            case "rogue":
                return 8;
            case "ranger":
                return 10;
            case "sorcerer":
                return 6;
            case "wizard":
                return 6;
            case "warlock": 
                return 8;
            default: 
                return 0;
        }
    };


    interface Rolls {
        [key: number]: number
    }

    const [conMod, setConMod] = useState(dice.mod(characterStats['CON']));
    const [HP, setHP] = useState(hit_die(characterClass) + conMod);
    const [rolls, setRolls] = useState<Rolls>({});

    // update the CON mod when stats change, applies per level
    useEffect(() => {
        setConMod(dice.mod(characterStats['CON']));
    }, [characterStats]);

    // add another dice roll to rolls when the level changes
    useEffect(() => {
        if (characterLevel >= 2) {
            let toAdd = dice.rollDice(hit_die(characterClass));
            setRolls((prev) => { 
                return {
                    ...prev, 
                    [`${characterLevel}`]: toAdd
                }});
        }
    }, [characterLevel, characterClass]);

    // if the level is reset to 1 we must reset everything
    useEffect(() => {
        if (characterLevel === 1) {
            setConMod(dice.mod(characterStats['CON']))
            setHP(hit_die(characterClass) + conMod);
            setRolls({});
        }
    }, [characterLevel, characterStats, characterClass, conMod]); 

    // setting the actual HP happens here - after all other effects have run
    useEffect(() => {

        const calculateHP = (
            conMod: number, 
            characterLevel: number, 
            rollsCopy: number[], 
            characterClass: string) => {
                // represents level 1, regardless of their original conMod, which reapplies retroactively
                let total = hit_die(characterClass) + conMod; 
                for (let i = 2; i <= characterLevel; i += 1) {
                    // minimum of + 1 HP per level, even with negative mod
                    ((conMod + rollsCopy[i]) > 0) ? total += (conMod + rollsCopy[i]) : total += 1; 
                }
                return total;
        }

        if (characterLevel >= 2) {
            const rollsCopy = Object.values({...rolls});
            setHP(calculateHP(conMod, characterLevel, rollsCopy, characterClass));
        };

    }, [characterClass, characterLevel, conMod, rolls]);

    // return setHP for future override functionality
    return { HP, setHP, conMod, hit_die, rolls };
}

export default useHP;