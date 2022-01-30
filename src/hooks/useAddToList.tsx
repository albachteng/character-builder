/* */
import { useState, useEffect, useReducer } from "react";

type Props<T> = {
    toAdd: T;
}

type ListToggle<T> = (toAdd: T) => void;

function addToList<T>({toAdd}: Props<T>) {

    const [list, useList] = useState<T[]>([]);

    const handleClick: ListToggle<T> = () => {
        list.includes(toAdd) 
            ? useList(list.slice().filter((item: T) => item !== toAdd))
            : useList(prev => [...prev, toAdd]);
    };

    return {
        handleClick,
        list
    };
};

export default addToList;