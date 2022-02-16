import RenderMap from '../RenderMap';
import QueryWrapper from '../QueryWrapper';
import {
  ClassEquipmentOptions,
  ClassStartingEquipment,
  BackgroundEquipment
} from '../../queries';
import withUseOption from '../withUseOption';
import { Background, CharacterClass, MappingFunc } from '../../types';
import QueryRenderer from '../QueryRenderer';

type Props = {
  characterClass: CharacterClass;
  characterBackground: Background;
};

const InventoryDisplay = ({ characterClass, characterBackground }: Props) => {
  const equipmentMap: MappingFunc<{ [key: string]: any }> = (item, index) =>
    item?.equipment?.name !== null && (
      <li key={`${item?.equipment?.name}${index}`}>
        {item?.equipment?.name}: {item?.quantity}
      </li>
    );
  // TODO equipment type

  const RenderMapWithUseOption = withUseOption(RenderMap);

  return (
    <>
      <div>
        <h2>Inventory:</h2>
        <ul>
          <QueryRenderer
            query={ClassStartingEquipment}
            variables={{ filter: { index: characterClass } }}
            dataType={['class', 'starting_equipment']}
            mappingFunc={equipmentMap} />
          <QueryWrapper
            query={ClassEquipmentOptions}
            variables={{ filter: { index: characterClass } }}
            dataType={['class', 'starting_equipment_options']}
          >
            <RenderMapWithUseOption mappingFunc={equipmentMap} />
          </QueryWrapper>
          <QueryRenderer
            query={BackgroundEquipment}
            variables={{ filter: { index: characterBackground } }}
            dataType={['background', 'starting_equipment']}
            mappingFunc={equipmentMap} />
        </ul>
      </div>
    </>
  );
};

export default InventoryDisplay;
