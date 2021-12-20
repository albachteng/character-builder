import { gql } from '@apollo/client';

export const HitDice = gql`
    query HitDice ($filter: FilterFindOneClassInput){
        class (filter: $filter) {
            name
            index
            hit_die
        }
    }`