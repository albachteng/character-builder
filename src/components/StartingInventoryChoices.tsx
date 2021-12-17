import useOption from "../hooks/useOption";
import { Choice } from '../types'

type Props = {
    choicesArray: Choice[] 
}

const StartingInventoryChocies = ({choicesArray}: Props) => {

    const { selections } = useOption(choicesArray);

    return (

        selections && (
            <ul>
                {selections.map((choice) => <li>{choice?.equipment?.name}: {choice?.quantity}</li>)}
            </ul>
        ) 
    )
};

export default StartingInventoryChocies;