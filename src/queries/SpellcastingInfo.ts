import { gql } from '@apollo/client';

export const SpellcastingInfo = gql`
  query SpellcastingInfo($filter: FilterFindOneClassInput) {
    class(filter: $filter) {
      index
      spellcasting {
        info {
          name
          desc
          __typename
        }
        spellcasting_ability {
          name
          index
          __typename
        }
        level
      }
    }
  }
`;
