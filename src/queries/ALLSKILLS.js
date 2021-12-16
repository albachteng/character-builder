import { gql } from '@apollo/client';

export const AllSkills = gql`
query allSkills {
  skills {
    name
    ability_score {
      name
    }
    desc
  }
}`;