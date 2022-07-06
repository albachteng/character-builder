import { graphql } from 'babel-plugin-relay/macro';
import { useId } from 'react';
import { useFragment } from 'react-relay';
import { Spell } from '../../types';
import type { SpellHeaderFragment_spell$key } from './__generated__/SpellHeaderFragment_spell.graphql';

type Props = {
  spellRef: SpellHeaderFragment_spell$key
  // handleClick: (spell: Spell) => void;
  // list: Spell[];
};

function SpellHeader({
  spellRef, /* index, handleClick, list */
}: Props) {

  const { name, level } = useFragment(graphql`
    fragment SpellHeaderFragment_spell on Spell {
      name
      level
    }`, spellRef);

  return (
    <div>
      <p key={useId()}>
        {name}
        {level ? `, Level ${level}` : ', Cantrip'}
      </p>
      {/* <button onClick={() => handleClick(spell)}> */}
      {/*   {list?.includes(spell) ? 'Remove' : 'Add'} */}
      {/* </button> */}
    </div>
  );
}

export default SpellHeader;
