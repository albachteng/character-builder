import { gql } from '@apollo/client';

export const RacialFeatures = gql`
query RacialFeatures ($filter: FilterFindManyTraitInput) {
    features: traits (filter: $filter){
      name
      desc
    }
  }
`;