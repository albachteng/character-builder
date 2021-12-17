import StartingInventoryChoices from './StartingInventoryChoices';
import { ClassEquipmentOptions, ClassStartingEquipment } from "../queries";
import { useQuery } from '@apollo/client';

type Props = {
    characterClass: string,
}

const InventoryDisplay = ({characterClass}: Props) => {
    
    const { loading, error, data } = useQuery(ClassEquipmentOptions, {
        variables: {"filter": {"index": characterClass}}
      });

    const startingEquipment = useQuery(ClassStartingEquipment, {
        variables: {"filter": { "index": characterClass}}
    });

    return (
        <>
            {(loading || startingEquipment.loading) && 'Loading...'}
            {(error || startingEquipment.error) && 'Whoops! Something went wrong!'}
            {(data && startingEquipment.data) && (
                <div>
                    <h3>Inventory:</h3>
                    <StartingInventoryChoices 
                        choicesArray={data?.class?.starting_equipment_options} 
                        otherEquipment={startingEquipment.data.class.starting_equipment}/>
                </div>
            )}
        </>
    )
};

export default InventoryDisplay;