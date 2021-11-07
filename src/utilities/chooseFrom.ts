export const chooseFrom = (choose: number, from: any[]) => {
    const choices = [];
    while (choices.length < choose) {
        const choice = Math.floor(Math.random()*from.length);
        choices.push(from[choice]);
    }
    return choices;
};