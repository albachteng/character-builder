import { Equipment as EquipmentType } from '../../types';

type EquipmentProps = {
    equipment: EquipmentType
    id: string
}

const EquipmentDetails = ({equipment}: EquipmentProps) => {
    return (
        <>
            <pre>{JSON.stringify(equipment?.desc, null, 2)}</pre>
        </>
    )
}

export default EquipmentDetails;