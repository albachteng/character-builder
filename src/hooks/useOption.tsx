import { useState, useEffect } from "react";
import {chooseFrom} from '../utilities/chooseFrom';

interface choice {
    [key: string]: any, // can we rule out that the choices will have other fields? 
    choose: number,
    from: any[]; // !  
}


const useOption = () => {
    const [selections, setSelections]: [any, React.Dispatch<any>] = useState(); // ! 
    // choose takes a choice array and returns the appropriate number of selections
    const choose = (choicesArray: choice[]) => setSelections(choicesArray.map(({choose, from}: choice) => {
        return chooseFrom(choose, from.filter((option) => option?.equipment?.name !== null));
    }));
    return {
        choose,
        selections,
        setSelections,
    };
};


export default useOption;