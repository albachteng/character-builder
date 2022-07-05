import { ReactNode, useId } from 'react';
import { SpellModByClass, SpellcastingInfo, SpellsOptionsByClassAndLevel } from '../../queries';
import {
  MappingFunc, Maybe, Spell, ClassSpellcastingSpellcasting_Ability, AbilityScores, ZeroToTwenty, CharacterClass
} from '../../types';
import { AbilityScoreName } from '../../types/AbilityScoreName';
import dice from '../../utilities/dice';
import ToggleList from '../ToggleList';
import SpellDetails from './SpellDetails';
import SpellSlots from './SpellSlots';

const formatSpellTitle = (spell: Spell) => {
  let title = `${spell?.name} `;
  if (spell?.level && spell?.level > 0) title += `, Level ${spell?.level}`;
  else title += ', Cantrip';
  return title;
};

type Props = {
  characterStats: AbilityScores
  characterLevel: ZeroToTwenty
  characterClass: CharacterClass
}

function SpellsDisplay({
  characterStats,
  characterClass,
  characterLevel
}: Props) {

  const spellModMapFunc: MappingFunc<ClassSpellcastingSpellcasting_Ability> = (item, index, _) => {
    if (item?.name) {
      return (
        <p key={`${makeUniqueId('spellmod')}${index}`}>
          {item?.name}
          :
          {dice.mod(characterStats[item?.name as AbilityScoreName])}
        </p>
      );
    }
  };

  const spellcastingInfoMapFunc: MappingFunc<Spell> = (spell, spellIndex) => {
    // TODO
    const desc: ReactNode[] = [];
    spell?.desc?.forEach((paragraph: Maybe<string>, index: number) => {
      desc.push(<p key={`${makeUniqueId(`spellModDesc${spellIndex}`)}-paragraph-${index}`}>{paragraph}</p>);
    });
    return (
      <div key={`${makeUniqueId('spellMod')}${spellIndex}`}>
        <h4>{spell?.name}</h4>
        {desc}
      </div>
    );
  };

  return (
    <>
      <h2>Spells Display</h2>
      <h3>Spell Slots</h3>
      <SpellSlots
        characterClass={characterClass}
        characterLevel={characterLevel}
      />
      <h3>Spell Mod</h3>
      <QueryRenderer
        query={SpellModByClass}
        variables={{ filter: { index: characterClass } }}
        dataType={['class', 'spellcasting', 'spellcasting_ability']}
        mappingFunc={spellModMapFunc}
      />
      <QueryRenderer
        query={SpellcastingInfo}
        variables={{ filter: { index: characterClass } }}
        dataType={['class', 'spellcasting', 'info']}
        mappingFunc={spellcastingInfoMapFunc}
      />
      <h3>Spellbook</h3>
      <ToggleList<Spell>
        query={SpellsOptionsByClassAndLevel}
        variables={buildSpellVariables(characterClass, characterLevel)}
        dataType={['spells']}
        Details={SpellDetails}
        sortBy="levelAsc"
        title={formatSpellTitle}
      />
    </>
  );
}

export default SpellsDisplay;
