import { gql } from '@apollo/client';

export const FEATURES = gql`
query featuresQuery ($FilterFindManyFeatureInput: FilterFindManyFeatureInput){
  features(filter: $FilterFindManyFeatureInput) {
    name 
    desc
    level
  }
}`;

// variables: 
// {"FilterFindManyFeatureInput": {
//   "class": {
//     "index": "fighter"
// }}}