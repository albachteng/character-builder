import type { choice } from '../types';

export const chooseFrom = (choose: number, from: choice[]) => {
    const choices: any[] = [];
    while (choices.length < choose) {
        const choice = Math.floor(Math.random()*from.length);
        (!choices.includes(from[choice])) && choices.push(from[choice]);
    }
    return choices;
};