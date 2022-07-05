import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import useOnClickDescription from "../../hooks/useOnClickDescription";
import type { SpellModFragment_spellcasting$key } from './__generated__/SpellModFragment_spellcasting'

function SpellMod({ spellcastingRef, }) {

  const { spellcasting, info, level } = useFragment(graphql`
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
      return (
      <>
        <p onClick={toggleDescription}>
          {info?.name}
          :
          {dice.mod(characterStats[item?.name as AbilityScoreName])}
        </p>
        {description}
      </>
      );
    }
  )

  };
}

export default SpellMod;
