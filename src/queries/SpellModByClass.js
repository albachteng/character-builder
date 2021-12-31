import { gql } from '@apollo/client';

export const SpellModByClass = gql`query SpellModByClass ($filter: FilterFindOneClassInput) {
    class (filter: $filter) {
      spellcasting {
        spellcasting_ability {
          name
          index
        }
        info {
          name
          desc
        }
      }
    }
  }
`;
    