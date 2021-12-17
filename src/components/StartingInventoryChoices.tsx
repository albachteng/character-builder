import useOption from "../hooks/useOption";
import { Choice } from '../types'

type Props = {
    choicesArray: Choice[] 
    otherEquipment: {}[]
}

const StartingInventoryChocies = ({choicesArray, otherEquipment}: Props) => {

    const { selections } = useOption(choicesArray);

    const allOptions = [...selections, ...otherEquipment];
    console.log(allOptions);

    return (

        selections && (
            <ul>
                {allOptions.map((choice, index) => choice && <li key={`${choice?.equipment?.name}${index}`}>{choice?.equipment?.name}: {choice?.quantity}</li>)}
            </ul>
        ) 
    )
};

export default StartingInventoryChocies;