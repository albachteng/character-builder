import { Equipment } from '../../types';

type EquipmentDetailsProps = {
    equipment: Equipment
    id: string
}

const EquipmentDetails = ({equipment}: EquipmentDetailsProps) => {
    return (
        <>
            <pre>{JSON.stringify(equipment?.desc, null, 2)}</pre>
        </>
    )
}

export default EquipmentDetails;