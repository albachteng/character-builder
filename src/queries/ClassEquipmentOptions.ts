import { gql } from '@apollo/client';

export const ClassEquipmentOptions = gql`
query ClassEquipmentOptions ($filter: FilterFindOneClassInput) {
    class (filter: $filter) {
        starting_equipment_options {
        choose 
        from {
            quantity
            equipment {
                index
                name
                }
            }
        }
    }
}
`;