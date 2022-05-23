import { gql } from "@apollo/client";

export const Skills = gql`
  query Skills {
    skills {
      ability_score {
        index
        name
      }
      desc
      index
      name
    }
  }
`;
