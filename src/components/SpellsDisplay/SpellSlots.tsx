import { makeUniqueId } from '@apollo/client/utilities';
import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { ClassSpellSlots } from '../../queries';
import { CharacterClass, MappingFunc } from '../../types';
import RenderMap from '../RenderMap';
import type { SpellSlotsFragment_class_level$key } from './__generated/SpellSlotsFragment_class.graphql';

type Props = {
  characterClass: CharacterClass;
  characterLevel: number;
};

function SpellSlots({ characterClass, characterLevel, spellcastingRef}: Props) {

  const spellcasting = useFragment(graphql`
    fragment SpellSlotsFragment_spellcasting on LevelSpellcasting {
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
    }`, spellcastingRef);

  console.log({spellcasting})

  const mappingFunc: MappingFunc<{ [key: string]: any }> = (
    spellSlot: any,
    index: number,
  ) => {
    if (
      spellSlot?.level === characterLevel
      && spellSlot?.spellcasting?.spell_slots_level_1
    ) {
      return (
        <pre key={`${makeUniqueId('spellslots')}${index}`}>
          {JSON.stringify(spellSlot?.spellcasting, null, 3)}
        </pre>
      );
    }
  };

  return (
    <RenderMap
      mappingFunc={mappingFunc}
      data={spellcasting}
    />
  );
}

export default SpellSlots;
