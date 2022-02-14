import QueryWrapper from "../QueryWrapper";
import RenderMap, { MappingFunc } from "../RenderMap";
import { Items } from "../../queries";
import withOnClick from "../withOnClick";
import EquipmentDetails from './EquipmentDetails';
import { Equipment } from '../../types';

const itemMap: MappingFunc<Equipment> = (equipment, index, arr) => {
   const Header = () => <h5>{equipment?.name}</h5>
   const ItemWithOnClick = withOnClick(EquipmentDetails, Header);
   return (
      <ItemWithOnClick 
         equipment={equipment}
         id={`equipment-${equipment?.index}-${index}`}   
      />
   )
}

const ItemStore = () => {
   return (
      <QueryWrapper
         query={Items}
         variables={{}}
         dataType={['equipments']}
      >
         <RenderMap
            sortBy={'nameAsc'}
            mappingFunc={itemMap}
         />
      </QueryWrapper>
   )
}

export default ItemStore;