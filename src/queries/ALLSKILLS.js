import { gql } from '@apollo/client';

export const ALLSKILLS = gql`
query allSkills {
  skills {
    name
    ability_score {
      name
    }
    desc
  }
}`;