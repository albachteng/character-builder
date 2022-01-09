import { gql } from '@apollo/client';

export const RaceStartingProficiencies = gql`
    query RaceStartingProficiencies ($filter: FilterFindOneRaceInput) {
        race (filter: $filter) {
            proficiencies: starting_proficiencies {
                name
                __typename
                index
                url
            }
        }
    }
`;