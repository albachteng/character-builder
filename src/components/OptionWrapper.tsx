import { Choice } from "../types";
import useOption from '../hooks/useOption';

type Props = {
    mappingFunc: (value: any, index: number, array: any[]) => any, // ! 
    choicesArray: Choice[]
}

const OptionWrapper = ({mappingFunc, choicesArray}: Props) => {
    const { selections } = useOption(choicesArray);

    return (
        <>
            {selections && selections.map(mappingFunc)}
        </>
    )

}

export default OptionWrapper; 