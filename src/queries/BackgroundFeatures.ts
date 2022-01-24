import { gql } from '@apollo/client';

export const BackgroundFeatures = gql`query BackgroundFeatures ($filter: FilterFindOneBackgroundInput) {
    background (filter: $filter) {
      index
      feature {
        name
        desc
        __typename
      }
    }
  }
`;