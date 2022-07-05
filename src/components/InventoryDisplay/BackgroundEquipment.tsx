import { useId } from "react";
import { useFragment } from "react-relay";
import { Background, CharacterClass, MappingFunc } from "../../types";
import RenderMap from "../RenderMap";
import withUseOption from "../withUseOption";
import type { BackgroundEquipmentFragment_background$key } from './__generated__/BackgroundEquipmentFragment_background.graphql';
import { equipmentMap } from 'InventoryDisplay';

type Props = {
  characterBackground: Background
  backgroundRef: BackgroundEquipmentFragment_background$key
}

function BackgroundEquipment({ characterBackground, backgroundRef }: Props) {

  const {
    starting_equipment,
    starting_equipment_options
  } = useFragment(
    graphql`fragment BackgroundEquipmentFragment_background on Background {
      starting_equipment {
        quantity
        equipment {
          name
          index
          __typename
        }
      }
      starting_equipment_options {
        choose
        from {
          quantity
          equipment {
            name
            index
            __typename
        }
      }
    }}`, backgroundRef)

  const RenderMapWithUseOption = withUseOption(RenderMap);

  return (
    <div>
      <h2>Inventory:</h2>
      <ul>
        <RenderMap
          mappingFunc={equipmentMap}
          data={starting_equipment}
        />
        <RenderMapWithUseOption
          mappingFunc={equipmentMap}
          data={starting_equipment_options}
        />
      </ul>
    </div>
  );
}

export default InventoryDisplay;
