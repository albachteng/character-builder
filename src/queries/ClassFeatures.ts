import { gql } from '@apollo/client';

export const ClassFeatures = gql`
  query ClassFeaturesQuery($filter: FilterFindManyFeatureInput) {
    features(filter: $filter) {
      name
      index
      desc
      level
      __typename
    }
  }
`;
