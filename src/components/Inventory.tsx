import { useEffect } from "react";
import useOption from "../hooks/useOption";

type Props = {
    equipmentChoices: any[]    
}

const Inventory = ({equipmentChoices}: Props) => {
    const { choose, selections } = useOption();

    useEffect(() => {
        choose(equipmentChoices);
    }, []);
    
    console.group({selections});
    return (
        <div>
            <h3>Inventory:</h3>
            {selections && <ul>
                {selections.map((choice) => <li>{choice.equipment.name}: {choice.quantity}</li>)}
            </ul>}
        </div>
    )
}

export default Inventory;