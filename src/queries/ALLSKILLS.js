import { gql } from '@apollo/client';

export const AllSkills = gql`
query AllSkills {
  skills {
    name
    ability_score {
      name
    }
    desc
  }
}`;