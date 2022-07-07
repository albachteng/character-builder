import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { Background, CharacterClass, MappingFunc } from "../../types";
import type { BackgroundEquipmentFragment_background$key } from './__generated__/BackgroundEquipmentFragment_background.graphql';
import type { ClassEquipmentFragment_class$key } from './__generated__/ClassEquipmentFragment_class.graphql';
import BackgroundEquipment from './BackgroundEquipment';
import ClassEquipment from './ClassEquipment';

export const equipmentMap: MappingFunc<{ [key: string]: any }> = (item, i) =>
  item?.equipment?.index !== null && (
    <li key={item?.equipment?.index}>
      {item?.equipment?.name}:{item?.quantity}
    </li>
  );

type Props = {
  backgroundRef: BackgroundEquipmentFragment_background$key
  classRef: ClassEquipmentFragment_class$key
}

function InventoryDisplay({ classRef, backgroundRef }: Props) {

  return (
    <div>
      <h2>Inventory:</h2>
      <ul>
        <BackgroundEquipment classRef={classRef}/>
        <ClassEquipment backgroundRef={backgroundRef}/>
      </ul>
    </div>
  );
}

export default InventoryDisplay;
