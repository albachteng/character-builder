import { makeUniqueId } from '@apollo/client/utilities';
import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { ClassSpellSlots } from '../../queries';
import { CharacterClass, MappingFunc } from '../../types';
import RenderMap from '../RenderMap';
import type { SpellSlotsFragment_class$key } from './__generated__/SpellSlotsFragment_class.graphql';

type Props = {
  characterClass: CharacterClass;
  characterLevel: number;
  classRef: SpellSlotsFragment_class$key
};

function SpellSlots({ characterClass, characterLevel, classRef}: Props) {

  const { class_levels } = useFragment(graphql`
    fragment SpellSlotsFragment_class on Class {
      class_levels (limit: 1, skip: $level, sort: LEVEL_ASC) {
        spellcasting {
          cantrips_known
          spell_slots_level_1
          spell_slots_level_2
          spell_slots_level_3
          spell_slots_level_4
          spell_slots_level_5
          spell_slots_level_6
          spell_slots_level_7
          spell_slots_level_8
          spell_slots_level_9
          spells_known
        }
      }
    }`, classRef);

  const { spellcasting } = class_levels[0];

  return (
    <>
      <pre>{JSON.stringify(spellcasting)}</pre>
    </>
  );
}

export default SpellSlots;
