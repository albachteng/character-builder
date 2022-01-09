import type { Choice } from '../types';

export const chooseFrom = (choice: Choice) => {
    console.log('in chooseFrom: ', {choice});
    const choices: any[] = []; // ! 
    const { choose, from } = choice;
    if (choose && from) {
        for (let i = 0; i < choose; i += 1) {
            const selection = Math.floor(Math.random()*from.length);
            (!choices.includes(from[selection])) && from[selection] && choices.push(from[selection]); 
        }
    }
    console.log('in chooseFrom: ', {choices})
    return choices;
};