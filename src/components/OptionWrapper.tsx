import { Choice } from "../types";
import useOption from '../hooks/useOption';
import { useState, useEffect } from "react";

type Props = {
    mappingFunc: (value: any, index: number, array: any[]) => any, // ! 
    choicesArray: Choice[]
}

const OptionWrapper = ({mappingFunc, choicesArray}: Props) => {

    const { selections } = useOption(choicesArray);
    const [render, setRender] = useState<any>([])

    useEffect(() => {
        selections && setRender(selections.map(mappingFunc));
    }, [selections, mappingFunc])

    return (
        <>
            {render}
        </>
    )

}

export default OptionWrapper; 