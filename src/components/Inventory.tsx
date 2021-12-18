import QueryMap from './QueryMap';
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

    const equipmentMap = (item: any, index: number) => item && <li key={`${item?.equipment?.name}${index}`}>{item?.equipment?.name}: {item?.quantity}</li>;

    return (
        <>
            {(loading || startingEquipment.loading) && 'Loading...'}
            {(error || startingEquipment.error) && 'Whoops! Something went wrong!'}
            {(data && startingEquipment.data) && (
                <div>
                    <h2>Inventory:</h2>
                    <ul>
                        <QueryMap 
                            query={ClassStartingEquipment} 
                            variables={{"filter": {"index": characterClass}}}
                            mappingFunc={equipmentMap}
                            dataType={["class", 'starting_equipment']}/>    
                        <QueryMap 
                            query={ClassEquipmentOptions} 
                            variables={{"filter": {"index": characterClass}}}
                            mappingFunc={equipmentMap}
                            dataType={["class", 'starting_equipment_options']}
                            useOption={true}/>    
                    </ul>
                </div>
            )}
        </>
    )
};

export default InventoryDisplay;