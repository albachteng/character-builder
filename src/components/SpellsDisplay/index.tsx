import { SpellModByClass, SpellcastingInfo, SpellsOptionsByClassAndLevel } from '../../queries';
import { AbilityScores, CharacterClass, Maybe, Spell, ClassSpellcastingSpellcasting_Ability, ZeroToTwenty } from '../../types';
import SpellSlots from './SpellSlots';
import dice from '../../utilities/dice';
import { AbilityScoreName } from '../../types/AbilityScoreName';
import { ReactNode } from 'react';
import QueryWrapper from '../QueryWrapper';
import RenderMap, { MappingFunc } from '../RenderMap';
import SpellDetails from './SpellDetails';
import ToggleList from '../ToggleList';

type Props = {
  characterClass: CharacterClass;
  characterLevel: ZeroToTwenty;
  characterStats: AbilityScores;
};

const formatSpellTitle = (spell: Spell) => {
  let title = `${spell?.name} `;
  if (spell?.level && spell?.level > 0) title += `, Level ${spell?.level}`
  else title += `, Cantrip`;
  return title;
}

const SpellsDisplay = ({
  characterClass,
  characterLevel,
  characterStats
}: Props) => {

  const spellModMapFunc: MappingFunc<ClassSpellcastingSpellcasting_Ability> = (item) => {
    if (item?.name) {
      return (
        <p key={item?.name}>
          {item?.name}: {dice.mod(characterStats[item?.name as AbilityScoreName])}
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
    characterLevel: number
  ) => {
    const variables: { [key: string]: any } = {
      filter: {
        AND: { classes: { index: characterClass } },
        OR: []
      }
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
      <QueryWrapper
        query={SpellModByClass}
        variables={{ filter: { index: characterClass } }}
        dataType={['class', 'spellcasting', 'spellcasting_ability']}
      >
        <RenderMap mappingFunc={spellModMapFunc} />
      </QueryWrapper>
      <QueryWrapper
        query={SpellcastingInfo}
        variables={{ filter: { index: characterClass } }}
        dataType={['class', 'spellcasting', 'info']}
      >
        <RenderMap mappingFunc={spellcastingInfoMapFunc} />
      </QueryWrapper>
      <h3>Spellbook</h3>
      <ToggleList<Spell>
        query={SpellsOptionsByClassAndLevel}
        variables={buildSpellVariables(characterClass, characterLevel)}
        dataType={['spells']}
        Details={SpellDetails}
        sortBy={'levelAsc'}
        title={formatSpellTitle}
      />
    </>
  );
};

export default SpellsDisplay;
