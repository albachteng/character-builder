import { useFragment } from "react-relay";
import { Background } from "../../types";
import RenderMap from "../RenderMap";
import withUseOption from "../withUseOption";
import type { BackgroundEquipmentFragment_background$key } from './__generated__/BackgroundEquipmentFragment_background.graphql';
import { equipmentMap } from './index';
import { graphql } from "babel-plugin-relay/macro";

type Props = {
  backgroundRef: BackgroundEquipmentFragment_background$key
}

function BackgroundEquipment({ backgroundRef }: Props) {

  const {
    starting_equipment_options,
    starting_equipment
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

export default BackgroundEquipment;
