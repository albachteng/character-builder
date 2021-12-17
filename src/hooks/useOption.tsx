import { useState, useEffect } from "react";
import { chooseFrom } from '../utilities/chooseFrom';
import type { Choice } from '../types';

const useOption = (choicesArray: Choice[]) => {

    const [selections, setSelections]: [any[], React.Dispatch<any>] = useState([]); // ! 

    // choose takes a choice array and returns the appropriate number of selections
    const choose = (choicesArray: Choice[]) => setSelections(choicesArray.map((choice: Choice) => {
        if (choice && choice.from && choice.choose) {
            return chooseFrom(choice.choose, choice.from.filter((option) => option?.equipment?.name !== null));
    }}).flat());

    useEffect(() => {
        choose(choicesArray)
    }, [choicesArray])

    return {
        choose,
        selections,
        setSelections,
    };
};

export default useOption;