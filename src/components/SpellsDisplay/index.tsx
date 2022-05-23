import { ReactNode, useContext } from 'react';
import CharacterContext from '../CharacterContext';
import { SpellModByClass, SpellcastingInfo, SpellsOptionsByClassAndLevel } from '../../queries';
import {
  AbilityScores, CharacterClass, MappingFunc, Maybe, Spell, ClassSpellcastingSpellcasting_Ability, ZeroToTwenty,
} from '../../types';
import { AbilityScoreName } from '../../types/AbilityScoreName';
import dice from '../../utilities/dice';
import QueryRenderer from '../QueryRenderer';
import ToggleList from '../ToggleList';
import SpellDetails from './SpellDetails';
import SpellSlots from './SpellSlots';

const formatSpellTitle = (spell: Spell) => {
  let title = `${spell?.name} `;
  if (spell?.level && spell?.level > 0) title += `, Level ${spell?.level}`;
  else title += ', Cantrip';
  return title;
};

function SpellsDisplay() {

  const { characterStats, characterClass, characterLevel } = useContext(CharacterContext);

  const spellModMapFunc: MappingFunc<ClassSpellcastingSpellcasting_Ability> = (item) => {
    if (item?.name) {
      return (
        <p key={item?.name}>
          {item?.name}
          :
          {dice.mod(characterStats[item?.name as AbilityScoreName])}
        </p>
      );
    }
  };

  const spellcastingInfoMapFunc: MappingFunc<Spell> = (spell) => {
    // TODO
    const desc: ReactNode[] = [];
    spell?.desc?.forEach((paragraph: Maybe<string>, index: number) => {
      desc.push(<p key={`${spell?.name}-paragraph-${index}`}>{paragraph}</p>);
    });
    return (
      <div>
        <h4>{spell.name}</h4>
        {desc}
      </div>
    );
  };

  const buildSpellVariables = (
    characterClass: string,
    characterLevel: number,
  ) => {
    const variables: { [key: string]: any } = {
      filter: {
        AND: { classes: { index: characterClass } },
        OR: [],
      },
    };
    for (let i = 0; i <= characterLevel; i += 1) {
      variables.filter.OR.push({ level: i });
    }
    return variables;
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
