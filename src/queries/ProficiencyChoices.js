import { gql } from '@apollo/client';

export const PROFICIENCYCHOICES = gql`
    query ProficiencyChoices ($filter: FilterFindOneClassInput) {
        class (filter: $filter) {
            proficiency_choices {
                choose
                from {
                    name
                    index
                    url
                }
            }
        }
    }
`;