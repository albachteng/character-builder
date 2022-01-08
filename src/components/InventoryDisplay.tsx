import QueryMap, { MappingFunc } from './QueryMap';
import QueryRender from './QueryRender';
import QueryWrapper from './QueryWrapper';
import { ClassEquipmentOptions, ClassStartingEquipment, BackgroundEquipment } from "../queries";
import { useQuery } from '@apollo/client';
import withUseOption from './withUseOption';


type Props = {
    characterClass: string,
    characterBackground: string,
}

const InventoryDisplay = ({characterClass, characterBackground}: Props) => {
    
    const { loading, error, data } = useQuery(ClassEquipmentOptions, {
        variables: {"filter": {"index": characterClass}}
      });

    const startingEquipment = useQuery(ClassStartingEquipment, {
        variables: {"filter": { "index": characterClass}}
    });

    const equipmentMap: MappingFunc<{[key: string]: any}> = (item, index) => item && <li key={`${item?.equipment?.name}${index}`}>{item?.equipment?.name}: {item?.quantity}</li>;

    const QueryRenderWithUseOption = withUseOption(QueryRender);

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
                        <QueryMap 
                            query={BackgroundEquipment} 
                            variables={{"filter": {"index": characterBackground}}}
                            mappingFunc={equipmentMap}
                            dataType={["background", 'starting_equipment']}/>    
                        <h3>New Class Equipment Options</h3>
                        <QueryWrapper query={ClassStartingEquipment} variables={{"filter": {"index": characterClass}}} dataType={["class", "starting_equipment"]}>
                            <QueryRender mappingFunc={equipmentMap} data={{}}></QueryRender>
                        </QueryWrapper>
                        <QueryWrapper query={ClassEquipmentOptions} variables={{"filter": {"index": characterClass}}} dataType={["class", "starting_equipment_options"]}>
                            <QueryRenderWithUseOption mappingFunc={equipmentMap} data={{}}></QueryRenderWithUseOption>
                        </QueryWrapper>
                        <QueryWrapper query={BackgroundEquipment} variables={{"filter": {"index": characterBackground}}} dataType={["background", "starting_equipment"]}>
                            <QueryRender mappingFunc={equipmentMap} data={{}}></QueryRender>
                        </QueryWrapper>
                    </ul>
                </div>
            )}
        </>
    )
};

export default InventoryDisplay;