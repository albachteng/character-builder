import { gql } from '@apollo/client';

export const BackgroundFeatures = gql`query BackgroundFeatures ($filter: FilterFindOneBackgroundInput) {
    background (filter: $filter) {
      feature {
        name
        desc
        __typename
      }
    }
  }
`;