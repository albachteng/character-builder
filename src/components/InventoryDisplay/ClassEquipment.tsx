
import { useFragment } from "react-relay";
import RenderMap from "../RenderMap";
import withUseOption from "../withUseOption";
import type { ClassEquipmentFragment_class$key } from './__generated__/ClassEquipmentFragment_class.graphql';
import { equipmentMap } from './index';
import { graphql } from "babel-plugin-relay/macro";

type Props = {
  classRef: ClassEquipmentFragment_class$key
}

function ClassEquipment({ classRef }: Props) {

  const {
    starting_equipment,
    starting_equipment_options
  } = useFragment(
    graphql`fragment ClassEquipmentFragment_class on Class {
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
      }
  }`, classRef);

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

export default ClassEquipment;
