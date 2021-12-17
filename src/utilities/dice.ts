interface Dice {
    rollDice(
        dice: number, 
        repeat?: number,
        modifier?: number, 
        drop?: number): number,
    mod(stat: number): number,
}

const rollDice = function(
    dice: number, 
    repeat: number = 1, 
    modifier: number = 0, 
    drop: number = 0
    ): number {
        let result = [];
        // repeats and adds a single roll a number of times equal to repeat
        for (let i = 0; i < repeat; i += 1) {
            // represents a single roll of a dice-sided die
            result.push(Math.ceil(Math.random() * dice));
        }
    // ! NTS this doesn't work for drops higher than 1
    // TODO
    if (drop) { // sets the lowest number instead to zero, effectively removing it
      result[result.indexOf(Math.min(...result))] = 0;
    }
    // if a modifier is provided, it is added at the end before returning
    return result.reduce((a, b) => a + b) + modifier;
};

const mod = function(stat: number): number {
    return Math.floor((stat - 10)/2);
};

const dice: Dice = {
    rollDice,
    mod
}

export type LimitedRange<N extends number, M extends number> = number & { ___brand: [N, M] };

export function limitedRange<N extends number = 1, M extends number = 100>(i: number, n?: N, m?: M): LimitedRange<N, M> | null {
    if (i >= (n || 1) && i < (m || 100)) {
        return i as LimitedRange<N, M>;
    }
    return null;
}

export default dice;