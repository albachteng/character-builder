import { Equipment } from '../../types';

type EquipmentDetailsProps = {
    item: Equipment
    id: string
}

function EquipmentDetails({ item }: EquipmentDetailsProps) {
  return (
    <pre>{JSON.stringify(item?.desc, null, 2)}</pre>
  );
}

export default EquipmentDetails;
