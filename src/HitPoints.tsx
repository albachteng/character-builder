import { useState } from 'react';
import { useEffect } from 'react';
import dice from './utilities/dice';
// import { graphql, GraphQLTaggedNode, useFragment } from 'react-relay';
// import type { HitPointsFragment_class$key } from './queries/__generated__/queriesBasicClassInfoQuery.graphql';
// import type { queriesHitPointsFragment_class$ref } from './queries/__generated__/queriesHitPointsFragment_class.graphql';

type Props = {
    level: number,
    CON: number,
    hit_die: number
}

/* does not work with level up because 
rerolls previous HP increases, sometimes 
leading to HP losses - what we really want
to do is set an initial HP and call a useEffect
function that adds a new roll with each level */

const HitPoints = ({CON, level, hit_die}: Props) => {

    const [HP, setHP] = useState<number>(hit_die);
    const [conMod, setConMod] = useState<number>(dice.mod(CON));

    console.log('state HP', HP);
    
    // update the CON mod when stats change
    useEffect(() => {
        setConMod(dice.mod(CON));
    }, [CON]);

    // add another dice roll to HP total on level up
    useEffect(() => {
        if (level >= 2) {
            let toAdd = dice.rollDice(hit_die);
            // minimum increase of 1 per PHB
            if ((toAdd + conMod) < 1) toAdd = 1;
            setHP((prev) => prev + toAdd);
        }
    }, [level]);

    /* const hitDiceData = useFragment(graphql`
        fragment HitPointsFragment_class on class {
            hit_die
        }`, AppQuery); */ 
    // ! come back to fragments later...

    return (
        <>
            <h1>HP: {HP + (conMod * level)}</h1>
            <h2>baseHP: {HP} + CON mod: {conMod} * level: {level}</h2>
        </>
    )
}

export default HitPoints;