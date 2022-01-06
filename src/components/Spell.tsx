import { Spell as SpellType } from '../types';
import SpellDetails from './SpellDetails';
import withOnClick from './WithOnClick';

type Props = {
    spell: SpellType 
    id: string
}

const Spell = ({spell, id}: Props) => {

    const SpellDetailsWithOnClick = withOnClick(SpellDetails, () => <p>{spell.name}{spell.level ? `, Level ${spell.level}` : `, Cantrip`}</p>);

    return (
        <>
            <SpellDetailsWithOnClick id={id} spell={spell}/> 
        </>
    )
} 

export default Spell;