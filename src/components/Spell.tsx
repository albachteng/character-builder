import useOnClickDescription from '../hooks/useOnClickDescription';

type Props = {
    spell: any
}

const Spell = ({spell}: Props) => {

    const { description, toggleDescription } = useOnClickDescription(spell);

    return (
        <div>
            <p onClick={toggleDescription}>{spell.name}{spell.level && `, Level ${spell.level}`}</p>
            {description}
        </div>
    )
} 

export default Spell;