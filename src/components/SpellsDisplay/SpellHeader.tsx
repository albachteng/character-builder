import { Spell } from '../../types';

type Props = {
  spell: Spell;
  index: number;
  handleClick: (spell: Spell) => void;
  list: Spell[];
};

const SpellHeader = ({ spell, index, handleClick, list }: Props) => {
  return (
    <div>
      <p key={`${spell?.name}${index}`}>
        {spell?.name}
        {spell?.level ? `, Level ${spell?.level}` : `, Cantrip`}
      </p>
      <button onClick={() => handleClick(spell)}>
        {list?.includes(spell) ? 'Remove' : 'Add'}
      </button>
    </div>
  );
};

export default SpellHeader;
