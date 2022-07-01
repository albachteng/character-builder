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
import type { FragmentInventoryDisplay_background$key } from './__generated__/InventoryDisplay_background.graphql';
import type { FragmentInventoryDisplay_class$key } from './__generated__/InventoryDisplay_class.graphql';

type Props = {
  characterClass: CharacterClass
  characterBackground: Background
  backgroundRef: FragmentInventoryDisplay_background$key
}

function InventoryDisplay({ characterClass, characterBackground }) {

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
    graphql`fragment FragmentInventoryDisplay_class on Class {
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
    graphql`fragment InventoryDisplay_background on Background {
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
