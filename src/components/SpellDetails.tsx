import { Spell } from '../types';

type Props = {
    spell: Spell
}

const SpellDetails = ({spell}: Props) => {

    return (
        <>
            <pre>{JSON.stringify(spell, null, 2)}</pre>
        </>
    )
};

export default SpellDetails;