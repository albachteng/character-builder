import { gql } from "@apollo/client";

export const MagicSchools = gql`
  query MagicSchools {
    magicSchools {
      desc
      index
      name
    }
  }
`;
