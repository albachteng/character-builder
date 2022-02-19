import dice from "../dice";

const { rollDice, mod } = dice;

describe('----- dice -----', () => {
    test('rollDice returns numbers within expected bounds', () => {
        expect(1).toEqual(1);
        let numbers: number[] = []; 
        for (let i = 0; i < 1000; i += 1) {
            numbers.push(rollDice(12));
        }
        numbers.forEach((number) => {
            expect(number).toBeLessThanOrEqual(12);
            expect(number).toBeGreaterThan(0);
        });
        numbers = [];
        for (let i = 0; i < 1000; i += 1) {
            numbers.push(rollDice(6, 4, 1, 1));
        }
        numbers.forEach((number) => {
            // highest: 6 + 6 + 6 + 0(drop) + 1 (mod)
            expect(number).toBeLessThanOrEqual(19);
            // lowest: 1 + 1 + 1 + 0(drop) + 1(mod);
            expect(number).toBeGreaterThanOrEqual(4);
        });
    });
    test('mod returns the correct modifier', () => {
        const five = mod(20); 
        expect(five).toEqual(5);
        const four = mod(19); 
        expect(four).toEqual(4);
        const three = mod(16); 
        expect(three).toEqual(3);
        const two = mod(15); 
        expect(two).toEqual(2);
        const one = mod(12); 
        expect(one).toEqual(1);
        const zero = mod(10); 
        expect(zero).toEqual(0);
        expect(-one).toEqual(mod(9));
        expect(-two).toEqual(mod(7));
        expect(-three).toEqual(mod(5));
        expect(-four).toEqual(mod(2));
        expect(-five).toEqual(mod(1));
    })
})