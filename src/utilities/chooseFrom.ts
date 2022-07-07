import { Choice } from "../types";

const chooseFrom = <T>({choose, from}: Choice<T>) => {
    if (choose <= 0 || from?.length === 0 || !Array.isArray(from)) return [];
    const fromClone = from?.slice();
    const selections: T[] = [];
    while (selections.length < choose && fromClone?.length > 0) {
        const selectionIndex = Math.floor(Math.random() * fromClone?.length);
        const [selection] = fromClone?.splice(selectionIndex, 1);
        if (selection && !selections?.includes(selection)) selections?.push(selection);
    }
    return selections;
};

export default chooseFrom;
