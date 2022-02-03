import { gql } from '@apollo/client';

export const MagicItems = gql`query MagicItems {
    magicItems {
      name
      index
      equipment_category {
        name
        index
        __typename
      }
      __typename
      desc
    }
  }`;