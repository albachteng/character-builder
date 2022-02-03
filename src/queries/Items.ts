import { gql } from '@apollo/client';

export const Items = gql`
  query Items {
    equipments {
      name
      index
      throw_range {
        normal
        long
        __typename
      }
      tool_category
      weapon_category
      vehicle_category
      properties {
        name
        index
        __typename
        desc
      }
      __typename
      desc
      armor_category
      name
      index
      armor_class {
        base
        max_bonus
      }
      stealth_disadvantage
      range {
        normal
        long
        __typename
      }
      damage {
        __typename
        damage_dice
        damage_type {
          name
          index
          __typename
        }
      }
      two_handed_damage {
        __typename
        damage_dice
        damage_type {
          name
          index
          __typename
        }
      }
      category_range
      gear_category {
        name
        index
        __typename
      }
      equipment_category {
        name
        index
        __typename
      }
      capacity
      quantity
      cost {
        __typename
        quantity
        unit
      }
      special
      speed {
        unit
        quantity
        __typename
      }
      weight
      str_minimum
    }
  }
`;
