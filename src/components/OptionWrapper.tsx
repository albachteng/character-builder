import { Choice } from "../types";
import useOption from '../hooks/useOption';
import { MappingFunc } from './RenderMap';

type Props = {
    mappingFunc: MappingFunc<any>, 
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