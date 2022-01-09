import { useState, useEffect } from "react";
import { chooseFrom } from '../utilities/chooseFrom';
import type { Choice } from '../types';

const useOption = (choicesArray: Choice[]) => {

    const [selections, setSelections]: [any[], React.Dispatch<any>] = useState([]); // ! 

    useEffect(() => {
        setSelections(choicesArray.map((choice) => chooseFrom(choice)));
    }, [choicesArray]);

    console.log('in useOption: ', {selections});

    return {
        selections,
        setSelections,
    };
};

export default useOption;