import { Spell } from "../types";

type Props = {
    spell: Spell
    index: number
    handleClick: (spell: Spell) => void
}

const SpellHeader = ({spell, index, handleClick}: Props) => {
    return (
        <div>
            <p key={`${spell?.name}${index}`}>
                {spell?.name}{spell?.level ? `, Level ${spell?.level}` : `, Cantrip`}
            </p>
            <button onClick={() => handleClick(spell)}>Add</button>
        </div>
    )
};

export default SpellHeader