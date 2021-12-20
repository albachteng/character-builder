import { gql } from '@apollo/client';

export const BackgroundEquipment = gql`query BackgroundEquipment ($filter: FilterFindOneBackgroundInput) {
    background (filter: $filter) {
      name
      _id
      starting_equipment {
        __typename
        quantity
        equipment {
          name
          index
          url
        }
      }
    }
  }
`;