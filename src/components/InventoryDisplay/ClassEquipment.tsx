
import { useId } from "react";
import { useFragment } from "react-relay";
import RenderMap from "../RenderMap";
import withUseOption from "../withUseOption";
import type { InventoryDisplayFragment_class$key } from './__generated__/InventoryDisplayFragment_class.graphql';

type Props = {
  characterClass: CharacterClass
  classRef: InventoryDisplayFragment_class$key
}

function InventoryDisplay({ characterClass, classRef }: Props) {

  const equipmentMap: MappingFunc<{ [key: string]: any }> = (item, index) =>
    item?.equipment?.name !== null && (
      <li key={useId()}>
        {item?.equipment?.name}:{item?.quantity}
      </li>
    );

  const {
    starting_equipment,
    starting_equipment_options
  } = useFragment(
    graphql`fragment InventoryDisplayFragment_class on Class {
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

  const {
    starting_equipment,
    starting_equipment_options
  } = useFragment(
    graphql`fragment InventoryDisplayFragment_background on Background {
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
