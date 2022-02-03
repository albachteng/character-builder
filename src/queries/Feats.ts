import { gql } from '@apollo/client';
export const Feats = gql`
  query Feats {
    feats {
      name
      index
      desc
      prerequisites {
        ability_score {
          name
        }
        minimum_score
      }
    }
  }
`;
