import { Equipment } from '../../types';
import { handleStringArray } from '../SpellsDisplay/SpellDetails'
import BuildDetails from '../BuildDetails';

type EquipmentDetailsProps = {
    equipment: Equipment
    id: string
}

const EquipmentDetails = ({equipment}: EquipmentDetailsProps) => {
    return (
        <>
            <div className='equipment-desc'>{handleStringArray(equipment?.desc || [], 'p')}</div>
            <BuildDetails item={equipment}></BuildDetails>
        </>
    )
}

export default EquipmentDetails;