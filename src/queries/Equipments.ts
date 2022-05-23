import { gql } from "@apollo/client";

export const Items = gql`
  query Equipments {
    equipments {
      armor_category
      armor_class {
        base
        dex_bonus
        max_bonus
      }
      capacity
      category_range
      contents {
        item {
          index
          name
        }
        quantity
      }
      cost {
        quantity
        unit
      }
      damage {
        damage_dice
        damage_type {
          index
          name
        }
      }
      desc
      equipment_category {
        index
        name
      }
      gear_category {
        index
        name
      }
      index
      name
      properties {
        desc
        index
        name
      }
      quantity
      range {
        long
        normal
      }
      special
      speed {
        quantity
        unit
      }
      stealth_disadvantage
      str_minimum
      throw_range {
        long
        normal
      }
      tool_category
      two_handed_damage {
        damage_dice
      }
      vehicle_category
      weapon_category
      weapon_range
      weight
    }
  }
`;
