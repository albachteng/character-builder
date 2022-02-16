import { gql } from '@apollo/client';

export const CharacterProficiencies = gql`
  query CharacterProficiencies(
    $background: FilterFindOneBackgroundInput
    $race: FilterFindOneRaceInput
    $class: FilterFindOneClassInput
  ) {
    background(filter: $background) {
      index
      proficiencies: starting_proficiencies {
        name
        index
        url
        __typename
      }
    }
    race(filter: $race) {
      index
      proficiencies: starting_proficiencies {
        name
        __typename
        index
        url
      }
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
    class(filter: $class) {
      index
      proficiency_choices {
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
