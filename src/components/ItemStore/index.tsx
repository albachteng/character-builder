import { ClassEquipmentOptions, Items } from '../../queries';
import { ClassStartingEquipment } from '../../queries';
import { Background, Equipment } from '../../types';
import CharacterContext from '../CharacterContext';
import { useContext } from 'react';
import ToggleList from '../ToggleList';
import { BackgroundEquipment } from '../../queries';
import EquipmentDetails from './EquipmentDetails';
import { useQuery } from '@apollo/client';
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

  const backgroundEquipment = useFragment(
    graphql`fragment ItemStoreFragment_background on Background {
        starting_equipment {
        __typename
        quantity
        equipment {
          name
          index
          url
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
          __typename
          index
        }
      }
      starting_equipment_options {
        choose
        from {
          quantity
          equipment {
            index
            name
          }
        }
      }
    }`, classRef);

  const { selections }: {selections: Equipment[]} = useOption(starting_equipment_options);

  return (
      <ToggleList<Equipment>
        query={Items}
        variables={{}}
        dataType={['equipments']}
        sortBy="nameAsc"
        Details={EquipmentDetails}
        initial={initialItems}
      />
  );
}

export default ItemStore;
