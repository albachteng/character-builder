import { gql } from '@apollo/client';

export const ClassStartingEquipment = gql`query ClassStartingEquipment ($filter: FilterFindOneClassInput) {
    class (filter:$filter) {
        starting_equipment {
            __typename
            quantity
            equipment {
                name
                __typename
                index
        }
      }
    }
  }`