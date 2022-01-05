import useOnClickDescription from '../hooks/useOnClickDescription';
import { Spell as SpellType } from '../types';
import SpellDetails from './SpellDetails';
import WithOnClick from './WithOnClick';

type Props = {
    spell: SpellType 
}

const Spell = ({spell}: Props) => {

    const SpellDetailsWithOnClick = WithOnClick(SpellDetails, `${spell.index}-wrapper`, {spell});
    const { description, toggleDescription } = useOnClickDescription(spell);

    return (
        <>
            <li onClick={toggleDescription}>{spell.name}{spell.level ? `, Level ${spell.level}` : `, Cantrip`}</li>
            {description}
            <SpellDetailsWithOnClick/> 
        </>
    )
} 

export default Spell;