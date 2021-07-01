interface Dice {
    rollDice(dice: number, repeat: number, modifier: number, drop: number): number,
    mod(stat: number): number,
}

const rollDice = function(dice: number, repeat=1, modifier=0, drop=0) {
    let result = [];
    // repeats and adds a single roll a number of times equal to repeat
    for (let i = 0; i < repeat; i += 1) {
        // represents a single roll of a dice-sided die
        result.push(Math.ceil(Math.random() * dice));
    }
    //! this doens't work for drops higher than 1
    if (drop) { // sets the lowest number instead to zero, effectively removing it
      result[result.indexOf(Math.min(...result))] = 0;
    }
    // if a modifier is provided, it is added at the end before returning
    return result.reduce((a, b) => a + b) + modifier;
};

const mod = function(stat: number) {
    return Math.floor((stat - 10)/2);
};

const dice = {
    rollDice,
    mod
}

export default dice;