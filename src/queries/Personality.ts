import { gql } from '@apollo/client';

export const PersonalityByBackground =  
    gql`query PersonalityByBackgound ($filter: FilterFindOneBackgroundInput) {
        background (filter: $filter) {
        name
            personality_traits {
            __typename
            choose
            from 
        }
        ideals {
        choose
        from {
            desc
            alignments {
            name
            }
        }
        }
        bonds {
        choose
        from
        }
        flaws {
        choose
        from
        }
        }
    }
`;