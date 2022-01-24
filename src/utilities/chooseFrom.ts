import type { Choice } from '../types';

// takes a single choice and returns an array of selections from that choice
export const chooseFrom = <T>(choice: Choice<T>) => {
    const choices: T[] = []; // ! 
    const { choose, from } = choice;
    if (choose && from?.length) {
        while (choices.length < choose) {
            const selection = Math.floor(Math.random() * from.length);
            (!choices.includes(from[selection])) && from[selection] && choices.push(from[selection]); 
        }
    }
    return choices;
};