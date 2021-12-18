import { gql } from '@apollo/client';

export const RaceQuery = gql`
  query RaceQuery ($filter: FilterFindOneRaceInput) {
    race (filter: $filter) {
      name
      index
      size
      size_description
      speed
      age
      alignment
      languages {
        name
      }
      language_desc
      language_options {
        choose 
        from {
          name
          index
        }
      }
      ability_bonuses {
        ability_score {
          name
          index
        }
        bonus
      }
      ability_bonus_options {
        choose
        from {
          ability_score {
            name
            index
          }
          bonus
        }
      }
      starting_proficiencies {
        name
        index
      }
      starting_proficiency_options {
        choose
        from {
          name
          index
        }
      }
      subraces {
        name
        index
      }
      traits {
        name
        desc
        parent {
          name
        }
      }
    }
`;
