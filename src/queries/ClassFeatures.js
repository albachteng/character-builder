import { gql } from '@apollo/client';

export const ClassFeatures = gql`
query ClassFeaturesQuery ($filter: FilterFindManyFeatureInput){
  features(filter: $filter) {
    name 
    desc
    level
  }
}`;