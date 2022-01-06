import { useState, useEffect } from "react";
import { CharacterClass } from "../types";
import dice from "../utilities/dice";

export interface Rolls {
    [key: number]: number
}

export const useHP = (characterLevel: number, characterClass: CharacterClass) => {

    const calculateHitDice = (characterClass: string): number => {
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

    const [rolls, setRolls] = useState<Rolls>({});

    // add another dice roll to rolls when the level increases
    useEffect(() => {
        if (characterLevel >= 2) {
            let toAdd = dice.rollDice(calculateHitDice(characterClass));
            setRolls((prev) => { 
                return {
                    ...prev, 
                    [`${characterLevel}`]: toAdd
                }});
        }
    }, [characterLevel, characterClass]);

    // if the level is reset to 1 we must reset all rolls
    useEffect(() => {
        if (characterLevel === 1) {
            const levelOne = calculateHitDice(characterClass);
            setRolls({1: levelOne});
        }
    }, [characterLevel, characterClass]); 

    // return setHP for future override functionality
    return { calculateHitDice, rolls };
}

export default useHP;