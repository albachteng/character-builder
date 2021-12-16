import { gql } from '@apollo/client';

export const HITDICE = gql`
    query HitDice ($FilterFindOneClassInput: FilterFindOneClassInput){
        class (filter: $FilterFindOneClassInput) {
            name
            hit_die
        }
    }`