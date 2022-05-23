// import { chooseFrom } from "../chooseFrom";
import chooseFrom from '../chooseFrom';

const from = [1, 2, 3,];

const emptyFrom: any[] = [];

const undefinedFrom = [undefined, undefined, undefined];

const notAnArray = {};

describe("----- chooseFrom -----", () => {
    test('it returns an array of the expected length', () => {
        const chooseOne = chooseFrom({choose: 1, from});
        expect(chooseOne.length).toEqual(1);
        const chooseTwo = chooseFrom({choose: 2, from});
        expect(chooseTwo.length).toEqual(2);
        const chooseThree = chooseFrom({choose: 3, from});
        expect(chooseThree.length).toEqual(3);
        const chooseFour = chooseFrom({choose: 4, from});
        expect(chooseFour.length).toEqual(3);
    });
    test('it returns an empty array if asked to choose from an empty array', () => {
        //@ts-ignore
        const chooseEmpty = chooseFrom({choose: 1, from: emptyFrom});
        expect(chooseEmpty).toEqual([]);
    });
    test('it returns an empty array if there are no valid choices', () => {
        const chooseUndefined = chooseFrom({choose: 1, from: undefinedFrom});
        expect(chooseUndefined).toEqual([]);
    });
    test('it returns an empty array if passed anything that is not a valid Choice object', () => {
        //@ts-ignore
        const chooseNotArray = chooseFrom({choose: 1, from: notAnArray})
        expect(chooseNotArray).toEqual([]);
    });
});