import RenderMap, { MappingFunc } from './RenderMap';
import QueryWrapper from './QueryWrapper';
import { ClassEquipmentOptions, ClassStartingEquipment, BackgroundEquipment } from "../queries";
import withUseOption from './withUseOption';
import { Background } from '../types/Background';
import { CharacterClass } from '../types';


type Props = {
    characterClass: CharacterClass,
    characterBackground: Background,
}

const InventoryDisplay = ({characterClass, characterBackground}: Props) => {
    
    const equipmentMap: MappingFunc<{[key: string]: any}> = (item, index) => item?.equipment?.name !== null && <li key={`${item?.equipment?.name}${index}`}>{item?.equipment?.name}: {item?.quantity}</li>;
    // TODO equipment type

    const RenderMapWithUseOption = withUseOption(RenderMap);

    return (
        <>
                <div>
                    <h2>Inventory:</h2>
                    <ul>
                        <QueryWrapper query={ClassStartingEquipment} variables={{"filter": {"index": characterClass}}} dataType={["class", "starting_equipment"]}>
                            <RenderMap mappingFunc={equipmentMap} />
                        </QueryWrapper>
                        <QueryWrapper query={ClassEquipmentOptions} variables={{"filter": {"index": characterClass}}} dataType={["class", "starting_equipment_options"]}>
                            <RenderMapWithUseOption mappingFunc={equipmentMap} />
                        </QueryWrapper>
                        <QueryWrapper query={BackgroundEquipment} variables={{"filter": {"index": characterBackground}}} dataType={["background", "starting_equipment"]}>
                            <RenderMap mappingFunc={equipmentMap} />
                        </QueryWrapper>
                    </ul>
                </div>
        </>
    )
};

export default InventoryDisplay;