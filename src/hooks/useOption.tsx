import { useState, useEffect } from "react";
import { chooseFrom } from '../utilities/chooseFrom';
import type { Choice } from '../types';

const useOption = (choicesArray: Choice[]) => {

    const [selections, setSelections]: [any[], React.Dispatch<any>] = useState([]); // ! 

    useEffect(() => {
        setSelections(choicesArray.map((choice) => chooseFrom(choice)).flat());
    }, [choicesArray]);

    return {
        selections,
        setSelections,
    };
};

export default useOption;