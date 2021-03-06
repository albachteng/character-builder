import { ClassEquipmentOptions, Items } from '../../queries';
import { ClassStartingEquipment } from '../../queries';
import { Background, Equipment } from '../../types';
import ToggleList from '../ToggleList';
import { BackgroundEquipment } from '../../queries';
import EquipmentDetails from './EquipmentDetails';
import useOption from '../../hooks/useOption';
import { useEffect, useState } from 'react';
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import type { ItemStoreFragment_background$key } from './__generated__/ItemStoreFragment_background.graphql';
import type { ItemStoreFragment_class$key } from './__generated__/ItemStoreFragment_class.graphql';

type Props = {
  characterBackground: Background
  backgroundRef: ItemStoreFragment_background$key
  characterClass: CharacterClass
  classRef: ItemStoreFragment_class$key
}

function ItemStore({characterBackground, backgroundRef, characterClass, classRef}: Props) {

  const {starting_equipment: backgroundEquipment } = useFragment(
    graphql`fragment ItemStoreFragment_background on Background {
        starting_equipment {
        __typename
        quantity
        equipment {
          name
          index
          __typename
        }
      }
    }`, backgroundRef)

  const {starting_equipment, starting_equipment_options} = useFragment(
    graphql`fragment ItemStoreFragment_class on Class {
      starting_equipment {
        __typename
        quantity
        equipment {
          name
          index
          __typename
        }
      }
      starting_equipment_options {
        choose
        from {
          __typename
          quantity
          equipment {
            index
            name
            __typename
          }
        }
      }
    }`, classRef);

  const { selections }: {selections: Equipment[]} = useOption(starting_equipment_options);

  const items = [...selections, ...starting_equipment, ...backgroundEquipment];

  return (
    <section>
      <ToggleList<Equipment>
        query={ Items}
        variables={{}}
        dataType={['equipments']}
        sortBy="nameAsc"
        Details={EquipmentDetails}
        initial={items}
      />
    </section>
  );
}

export default ItemStore;
