import { useContext } from "react";
import {
  ClassEquipmentOptions,
  ClassStartingEquipment,
  BackgroundEquipment,
} from "../../queries";
import { MappingFunc } from "../../types";
import CharacterContext from "../CharacterContext";
import QueryRenderer from "../QueryRenderer";
import QueryWrapper from "../QueryWrapper";
import RenderMap from "../RenderMap";
import withUseOption from "../withUseOption";

function InventoryDisplay() {
  const { characterClass, characterBackground } = useContext(CharacterContext);

  const equipmentMap: MappingFunc<{ [key: string]: any }> = (item, index) =>
    item?.equipment?.name !== null && (
      <li key={`${item?.equipment?.name}${index}`}>
        {item?.equipment?.name}:{item?.quantity}
      </li>
    );
  // TODO equipment type

  const RenderMapWithUseOption = withUseOption(RenderMap);

  return (
    <div>
      <h2>Inventory:</h2>
      <ul>
        <QueryRenderer
          query={ClassStartingEquipment}
          variables={{ filter: { index: characterClass } }}
          dataType={["class", "starting_equipment"]}
          mappingFunc={equipmentMap}
        />
        <QueryWrapper
          query={ClassEquipmentOptions}
          variables={{ filter: { index: characterClass } }}
          dataType={["class", "starting_equipment_options"]}
        >
          <RenderMapWithUseOption mappingFunc={equipmentMap} />
        </QueryWrapper>
        <QueryRenderer
          query={BackgroundEquipment}
          variables={{ filter: { index: characterBackground } }}
          dataType={["background", "starting_equipment"]}
          mappingFunc={equipmentMap}
        />
      </ul>
    </div>
  );
}

export default InventoryDisplay;
