import { gql } from '@apollo/client';

export const ClassProficiencyChoices = gql`
    query ClassProficiencyChoices ($filter: FilterFindOneClassInput) {
        class (filter: $filter) {
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