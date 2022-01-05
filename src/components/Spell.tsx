import useOnClickDescription from '../hooks/useOnClickDescription';
import { Spell as SpellType } from '../types';
import SpellDetails from './SpellDetails';
import withOnClick from './WithOnClick';

type Props = {
    spell: SpellType 
    id: string
}

const Spell = ({spell, id}: Props) => {

    const SpellDetailsWithOnClick = withOnClick(SpellDetails);
    const { description, toggleDescription } = useOnClickDescription(spell);

    return (
        <>
            <li onClick={toggleDescription}>{spell.name}{spell.level ? `, Level ${spell.level}` : `, Cantrip`}</li>
            {description}
            <SpellDetailsWithOnClick id={id} spell={spell}/> 
        </>
    )
} 

export default Spell;