import { ClassEquipmentOptions, Items } from '../../queries';
import { ClassStartingEquipment } from '../../queries';
import QueryWrapper from '../QueryWrapper';
import { Background, CharacterClass, Equipment } from '../../types';
import ToggleList from '../ToggleList';
import { BackgroundEquipment } from '../../queries';
import EquipmentDetails from './EquipmentDetails';
import { useQuery } from '@apollo/client';
import useOption from '../../hooks/useOption';
import { useEffect, useState } from 'react';

interface Props {
  characterClass: CharacterClass
  characterBackground: Background
}

function ItemStore({characterClass, characterBackground}: Props) {
  const {loading, error, data} = useQuery(BackgroundEquipment, {variables: {filter: {index: characterBackground}}});
  const {loading: loadingClassEquipment, error: errorClassEquipment, data: dataClassEquipment} = useQuery(ClassStartingEquipment,  {variables: { filter: { index: characterClass }}} );
  const {loading: loadingEquipmentOptions, error: errorEquipmentOptions, data: dataEquipmentOptions} = useQuery(ClassEquipmentOptions, {variables: { filter: { index: characterClass }}});

  const { selections }: {selections: Equipment[]} = useOption(dataEquipmentOptions?.class?.starting_equipment_options); 

  const [ initialItems, setInitialItems] = useState<Equipment[]>([])
  useEffect(() => {
    if (!loading && !error && data
      && !loadingClassEquipment && !errorClassEquipment && dataClassEquipment
      && !loadingEquipmentOptions && !errorEquipmentOptions && selections) {
        const toSet: Equipment[] = [];
        toSet.push(...data?.background?.starting_equipment);
        toSet.push(...dataClassEquipment?.class?.starting_equipment);
        toSet.push(...selections)
        setInitialItems(toSet);
      }
  }, [characterClass, characterBackground, loading, loadingClassEquipment, loadingEquipmentOptions, selections])

  console.log({initialItems, dataEquipmentOptions, selections})

  return (
      !loading && !error && data
      && !loadingClassEquipment && !errorClassEquipment && dataClassEquipment
      && !loadingEquipmentOptions && !errorEquipmentOptions && dataEquipmentOptions && selections?.length &&
      <ToggleList<Equipment>
        query={Items}
        variables={{}}
        dataType={['equipments']}
        sortBy="nameAsc"
        Details={EquipmentDetails}
        initial={initialItems}
      />
  );
}

export default ItemStore;
