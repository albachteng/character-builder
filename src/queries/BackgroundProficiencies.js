import { gql } from '@apollo/client';

export const BackgroundProficiencies = gql`query BackgroundProficiencies ($filter: FilterFindOneBackgroundInput) {
    background (filter: $filter) {
      starting_proficiencies {
        name
        index
        url
        __typename
      }
    }
  }
`;