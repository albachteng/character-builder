import { gql } from '@apollo/client';

export const EQUIPMENTOPTIONS = gql`
    query EquipmentOptions ($filter: FilterFindOneClassInput) {
        class (filter: $filter) {
            starting_equipment_options {
            choose 
            from {
                equipment {
                    index
                    name
                    }
                }
            }
        }
    }
`;