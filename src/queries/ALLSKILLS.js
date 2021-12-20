import { gql } from '@apollo/client';

export const AllSkills = gql`
query AllSkills {
  skills {
    name
      __typename
      index
      url
      desc
      ability_score {
          name
          index
          __typename
          url
      }
  }
}`;