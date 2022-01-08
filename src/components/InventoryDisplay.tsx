import { MappingFunc } from './QueryMap';
import QueryRender from './QueryRender';
import QueryWrapper from './QueryWrapper';
import { ClassEquipmentOptions, ClassStartingEquipment, BackgroundEquipment } from "../queries";
import withUseOption from './withUseOption';


type Props = {
    characterClass: string,
    characterBackground: string,
}

const InventoryDisplay = ({characterClass, characterBackground}: Props) => {
    
    const equipmentMap: MappingFunc<{[key: string]: any}> = (item, index) => item && <li key={`${item?.equipment?.name}${index}`}>{item?.equipment?.name}: {item?.quantity}</li>;

    const QueryRenderWithUseOption = withUseOption(QueryRender);

    return (
        <>
                <div>
                    <h2>Inventory:</h2>
                    <ul>
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
        </>
    )
};

export default InventoryDisplay;