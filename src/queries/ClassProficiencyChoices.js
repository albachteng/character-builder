import { gql } from '@apollo/client';

export const ClassProficiencyChoices = gql`
    query ClassProficiencyChoices ($filter: FilterFindOneClassInput) {
        class (filter: $filter) {
            proficiency_choices {
                choose
                from {
                    name
                    index
                    url
                    __typename
                }
            }
        }
    }
`;