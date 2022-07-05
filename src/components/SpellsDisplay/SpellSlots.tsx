import { makeUniqueId } from '@apollo/client/utilities';
import { ClassSpellSlots } from '../../queries';
import { CharacterClass, MappingFunc } from '../../types';
import QueryRenderer from '../QueryRenderer';
import type { SpellSlotsFragment_class$key } from './__generated/SpellSlotsFragment_class.graphql';

type Props = {
  characterClass: CharacterClass;
  characterLevel: number;
  classRef: SpellSlotsFragment_class$key
};

function SpellSlots({ characterClass, characterLevel }: Props) {

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
      data={}
    />
  );
}

export default SpellSlots;
