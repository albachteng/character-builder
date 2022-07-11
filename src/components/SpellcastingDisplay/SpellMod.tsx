import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import useOnClickDescription from "../../hooks/useOnClickDescription";
import dice from "../../utilities/dice";
import type { SpellModFragment_spellcasting$key } from './__generated__/SpellModFragment_spellcasting.graphql';
import type { AbilityScores, AbilityScoreName } from '../../types';

type Props = {
  spellcastingRef: SpellModFragment_spellcasting$key
  characterStats: AbilityScores
}

function SpellMod({ spellcastingRef, characterStats}: Props) {

  const { spellcasting_ability, info, level } = useFragment(graphql`
    fragment SpellModFragment_spellcasting on ClassSpellcasting {
        spellcasting_ability {
          index
          name
          url
        }
        level
        info {
          desc
          name
        }
      }
  `, spellcastingRef)

  const { description, toggleDescription } = useOnClickDescription(info)

  return (
    <>
      <p onClick={toggleDescription}>
        {spellcasting_ability?.name}
        :{' '}
        {dice.mod(characterStats[spellcasting_ability?.name as AbilityScoreName])}
      </p>
      {description}
    </>
  );
}

export default SpellMod;
