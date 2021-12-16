import { useState, useEffect } from "react";
import { chooseFrom } from '../utilities/chooseFrom';
import type { choice } from '../types';

const useOption = (choicesArray: choice[]) => {

    const [selections, setSelections]: [any[], React.Dispatch<any>] = useState([]); // ! 

    // choose takes a choice array and returns the appropriate number of selections
    const choose = (choicesArray: choice[]) => setSelections(choicesArray.map((choice: choice) => {
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