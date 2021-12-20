import { gql } from '@apollo/client';

export const RaceProficiencyChoices = gql`
  query RaceProficiencyChoices ($filter: FilterFindOneRaceInput) {
      race (filter: $filter) {
        proficiency_choices: starting_proficiency_options {
          choose
          __typename
          from {
            name
            __typename
            index
            url
          }
        }
      }
    }
  `;