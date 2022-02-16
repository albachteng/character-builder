import { Items } from "../../queries";
import EquipmentDetails from './EquipmentDetails';
import { Equipment } from '../../types';
import ToggleList from "../ToggleList";

const ItemStore = () => {
   return (
      <ToggleList<Equipment>
         query={Items}
         variables={{}}
         dataType={['equipments']}
         sortBy={'nameAsc'}
         Details={EquipmentDetails} 
      />
   )
}

export default ItemStore;