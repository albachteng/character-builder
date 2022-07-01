import { makeUniqueId } from "@apollo/client/utilities";
import { graphql } from "babel-plugin-relay/macro";
import { useContext } from "react";
import { useFragment } from "react-relay";
import {
  ClassEquipmentOptions,
  ClassStartingEquipment,
  BackgroundEquipment,
} from "../../queries";
import { Background, CharacterClass, MappingFunc } from "../../types";
import CharacterContext from "../CharacterContext";
import QueryRenderer from "../QueryRenderer";
import QueryWrapper from "../QueryWrapper";
import RenderMap from "../RenderMap";
import withUseOption from "../withUseOption";
import type { InventoryDisplayFragment_background$key } from './__generated__/InventoryDisplayFragment_background.graphql';
import type { InventoryDisplayFragment_class$key } from './__generated__/InventoryDisplayFragment_class.graphql';

type Props = {
  characterClass: CharacterClass
  characterBackground: Background
  backgroundRef: InventoryDisplayFragment_background$key
  classRef: InventoryDisplayFragment_class$key
}

function InventoryDisplay({ characterClass, characterBackground, classRef, backgroundRef }: Props) {

  const equipmentMap: MappingFunc<{ [key: string]: any }> = (item, index) =>
    item?.equipment?.name !== null && (
      <li key={`${makeUniqueId('equipment')}`}>
        {item?.equipment?.name}:{item?.quantity}
      </li>
    );

  const {
    starting_equipment: class_starting_equipment,
    starting_equipment_options: class_starting_equipment_options
  } = useFragment(
    graphql`fragment InventoryDisplayFragment_class on Class {
      starting_equipment {
        equipment {
          index
          name
        }
        quantity
      }
      starting_equipment_options {
        choose
        from {
          quantity
        }
        type
      }
  }`, classRef);

  const {
    starting_equipment,
    starting_equipment_options
  } = useFragment(
    graphql`fragment InventoryDisplayFragment_background on Background {
      starting_equipment {
        equipment {
          index
          name
        }
        quantity
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
      type
    }}`, backgroundRef)

  const RenderMapWithUseOption = withUseOption(RenderMap);

  return (
    <div>
      <h2>Inventory:</h2>
      <ul>
        <RenderMap
          mappingFunc={equipmentMap}
          data={class_starting_equipment}
        />
        <RenderMapWithUseOption
          mappingFunc={equipmentMap}
          data={class_starting_equipment_options}
        />
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
