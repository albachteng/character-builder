import useOption from "../hooks/useOption";
import type {choice} from '../types';

type Props = {
    equipmentChoices: choice[]    
}

const Inventory = ({equipmentChoices}: Props) => {
    const { selections } = useOption(equipmentChoices);
    
    console.group({selections});
    return (
        <div>
            <h3>Inventory:</h3>
            {selections && <ul>
                {selections.map((choice) => <li>{choice?.equipment?.name}: {choice?.quantity}</li>)}
            </ul>}
        </div>
    )
};

export default Inventory;