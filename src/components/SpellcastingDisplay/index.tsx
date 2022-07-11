import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { AbilityScores, CharacterClass, ZeroToTwenty } from '../../types';
import SpellMod from './SpellMod';
import SpellSlots from './SpellSlots';
import type { SpellcastingDisplayFragment_class$key } from './__generated__/SpellcastingDisplayFragment_class.graphql';

type Props = {
  characterStats: AbilityScores
  characterLevel: ZeroToTwenty
  characterClass: CharacterClass
  classRef: SpellcastingDisplayFragment_class$key
}

function SpellcastingDisplay({characterClass, characterLevel, characterStats, classRef}: Props) {

  const data = useFragment(graphql`
    fragment SpellcastingDisplayFragment_class on Class {
      spellcasting {
        ...SpellModFragment_spellcasting
      }
    }`, classRef);

  return (
    <section>
      <h3>Spell Modifier</h3>
      {data?.spellcasting && <SpellMod
        spellcastingRef={data?.spellcasting}
        characterStats={characterStats}
      />}
      <h3>Spell Slots</h3>
      <SpellSlots
        characterClass={characterClass}
        characterLevel={characterLevel}
        classRef={classRef}
      />
    </section>
  )
}

export default SpellcastingDisplay;
