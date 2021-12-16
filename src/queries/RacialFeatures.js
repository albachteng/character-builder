import { gql } from '@apollo/client';

export const RACIALFEATURES = gql`
query RacialFeatures ($filter: FilterFindManyTraitInput) {
    features: traits (filter: $filter){
      name
      desc
    }
  }
`;