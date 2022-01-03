import useOnClickDescription from '../hooks/useOnClickDescription';

type Props = {
    spell: any
}

const Spell = ({spell}: Props) => {

    const { description, toggleDescription } = useOnClickDescription(spell);

    return (
        <>
            <li onClick={toggleDescription}>{spell.name}{spell.level ? `, Level ${spell.level}` : `, Cantrip`}</li>
            {description}
        </>
    )
} 

export default Spell;