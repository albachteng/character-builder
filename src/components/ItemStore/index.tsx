import { Items } from '../../queries';
import { Equipment } from '../../types';
import ToggleList from '../ToggleList';
import EquipmentDetails from './EquipmentDetails';

function ItemStore() {
  return (
    <ToggleList<Equipment>
      query={Items}
      variables={{}}
      dataType={['equipments']}
      sortBy="nameAsc"
      Details={EquipmentDetails}
    />
  );
}

export default ItemStore;
