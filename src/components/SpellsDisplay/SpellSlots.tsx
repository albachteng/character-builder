import { ClassSpellSlots } from '../../queries';
import { CharacterClass, MappingFunc } from '../../types';
import QueryRenderer from '../QueryRenderer';

type Props = {
  characterClass: CharacterClass;
  characterLevel: number;
};

function SpellSlots({ characterClass, characterLevel }: Props) {
  const mappingFunc: MappingFunc<{ [key: string]: any }> = (
    spellSlot: any,
    index: number,
  ) => {
    if (
      spellSlot.level === characterLevel
      && spellSlot.spellcasting.spell_slots_level_1
    ) {
      return (
        <pre key={`${spellSlot.__typename}${index}`}>
          {JSON.stringify(spellSlot.spellcasting, null, 3)}
        </pre>
      );
    }
  };

  return (
    <QueryRenderer
      query={ClassSpellSlots}
      variables={{ filter: { index: characterClass } }}
      dataType={['class', 'class_levels']}
      mappingFunc={mappingFunc}
    />
  );
}

export default SpellSlots;
