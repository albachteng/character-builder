import { makeUniqueId } from "@apollo/client/utilities";
import { graphql } from "babel-plugin-relay/macro";
import { useContext, useId } from "react";
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

export const equipmentMap: MappingFunc<{ [key: string]: any }> = (item, index) =>
  item?.equipment?.name !== null && (
    <li key={useId()}>
      {item?.equipment?.name}:{item?.quantity}
    </li>
  );

type Props = {
  characterClass: CharacterClass
  characterBackground: Background
  backgroundRef: InventoryDisplayFragment_background$key
  classRef: InventoryDisplayFragment_class$key
}

function InventoryDisplay({ characterClass, characterBackground, classRef, backgroundRef }: Props) {

  const RenderMapWithUseOption = withUseOption(RenderMap);

  return (
    <div>
      <h2>Inventory:</h2>
      <ul>
        <BackgroundEquipment characterClass={characterClass} classRef={classRef}/>
        <ClassEquipment characterBackground={characterBackground} backgroundRef={backgroundRef}/>
      </ul>
    </div>
  );
}

export default InventoryDisplay;
