import StartingInventoryChoices from './StartingInventoryChoices';
import { ClassEquipmentOptions } from "../queries";
import { useQuery } from '@apollo/client';

type Props = {
    characterClass: string,
}

const InventoryDisplay = ({characterClass}: Props) => {
    
    const { loading, error, data } = useQuery(ClassEquipmentOptions, {
        variables: {"filter": {"index": characterClass}}
      });

    return (
        <>
            {loading && 'Loading...'}
            {error && 'Whoops! Something went wrong!'}
            {data && (
                <div>
                    {/* <ChoicesDisplay title="Equipment Choices" choicesArray={data?.class.starting_equipment_options}/> */}
                    <h3>Inventory:</h3>
                    <StartingInventoryChoices choicesArray={data?.class?.starting_equipment_options}/>
                </div>
            )}
        </>
    )
};

export default InventoryDisplay;