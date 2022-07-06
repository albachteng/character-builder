import { makeUniqueId } from "@apollo/client/utilities";
import { graphql } from "babel-plugin-relay/macro";
import { useContext, useId } from "react";
import { useFragment } from "react-relay";
import { Background, CharacterClass, MappingFunc } from "../../types";
import CharacterContext from "../CharacterContext";
import QueryRenderer from "../QueryRenderer";
import QueryWrapper from "../QueryWrapper";
import RenderMap from "../RenderMap";
import withUseOption from "../withUseOption";
import type { BackgroundEquipmentFragment_background$key } from './__generated__/BackgroundEquipmentFragment_background.graphql';
import type { ClassEquipmentFragment_class$key } from './__generated__/ClassEquipmentFragment_class.graphql';
import BackgroundEquipment from './BackgroundEquipment';
import ClassEquipment from './ClassEquipment';

export const equipmentMap: MappingFunc<{ [key: string]: any }> = (item, index) =>
  item?.equipment?.name !== null && (
    <li key={useId()}>
      {item?.equipment?.name}:{item?.quantity}
    </li>
  );

type Props = {
  characterClass: CharacterClass
  characterBackground: Background
  backgroundRef: BackgroundEquipmentFragment_background$key
  classRef: ClassEquipmentFragment_class$key
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
