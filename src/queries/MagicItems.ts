import { gql } from "@apollo/client";

export const MagicItems = gql`
  query MagicItems {
    magicItems {
      desc
      equipment_category {
        index
        name
      }
      index
      name
      rarity {
        name
      }
      variants {
        index
        name
      }
      variant
    }
  }
`;
