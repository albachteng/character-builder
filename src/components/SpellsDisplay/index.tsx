import { graphql } from 'babel-plugin-relay/macro';
import { ReactNode, useId } from 'react';
import { useFragment } from 'react-relay';
import {
  MappingFunc, ClassSpellcastingSpellcasting_Ability, AbilityScores, ZeroToTwenty, CharacterClass
} from '../../types';
import { AbilityScoreName } from '../../types/AbilityScoreName';
import dice from '../../utilities/dice';
import ToggleList from '../ToggleList';
import SpellDetails from './SpellDetails';
import SpellHeader from './SpellHeader';
import SpellMod from './SpellMod';
import SpellSlots from './SpellSlots';
import type { SpellModFragment_spellcasting$key } from './__generated__/SpellModFragment_spellcasting.graphql';
import type { SpellsDisplayFragment_query$key} from './__generated__/SpellHeaderFragment_query.graphql';
import type { SpellSlotsFragment_class$key } from './__generated__/SpellSlotsFragment_.graphql';

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
  queryRef: SpellsDisplayFragment_query$key
  spellcastingRef: SpellModFragment_spellcasting$key
  spellslotsRef: SpellSlotsFragment_spellcasting$key
  classRef: SpellSlotsFragment_class$key
}

function SpellsDisplay({
  characterStats,
  characterClass,
  characterLevel,
  queryRef,
  spellcastingRef,
  classRef,
  spellslotsRef
}: Props) {

  const { spells } = useFragment(graphql`
    fragment SpellsDisplayFragment_query on Query {
      spells (filter: $spells) {
        index
        ...SpellHeaderFragment_spell
        ...SpellDetailsFragment_spell
        subclasses {
          index
          name
        }
      }
    }`, queryRef);

  console.log({spells})

  const spellcastingInfoMapFunc: MappingFunc<Spell> = (spell, spellIndex) => {
    // TODO
    const description: ReactNode[] = [];
    spell?.desc?.forEach((paragraph: Maybe<string>, index: number) => {
      description.push(<p key={useId()}>{paragraph}</p>);
    });
    return (
      <div key={useId()}>
        <h4>{spell?.name}</h4>
        {description}
      </div>
    );
  };

  if (spells) {
    return (
      <>
          <h2>Spells Display</h2>
          <h3>Spell Slots</h3>
          <SpellSlots
            characterClass={characterClass}
            characterLevel={characterLevel}
            classRef={classRef}
          />
          {spells?.length && (
          <>
            <h3>Spell Mod</h3>
            <SpellMod
              spellcastingRef={spellcastingRef}
              characterStats={characterStats}
            />
          </>)}
          <h3>Spellbook</h3>
          {spells?.map((_ , i, spells) => {
            return (
              <div key={spells[i].__id}>
                <SpellHeader spellRef={spells?.[i]!}/>
                <SpellDetails spellRef={spells?.[i]!}/>
              </div>
            )
          })}
      </>
    );
  }
  return null
}

export default SpellsDisplay;
