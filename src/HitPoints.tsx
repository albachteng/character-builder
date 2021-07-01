import dice from './utilities/dice';

type Props = {
    level: number,
    CON: number,
    // hitDice || class (we can derive the hit dice from class)
}

/* does not work with level up because 
rerolls previous HP increases, sometimes 
leading to HP losses - what we really want
to do is set an initial HP and call a useEffect
function that adds a new roll with each level */

const HitPoints = ({CON, level}: Props) => {

    return (
        <h1>HP: {dice.rollDice(6, level) + CON}</h1>
    )
}

export default HitPoints;