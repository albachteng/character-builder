import useOnClickDescription from '../hooks/useOnClickDescription';

type Props = {
    spell: {
        [key: string]: any, 
        desc: string[], 
        level?: number, name: string
    } // NTS - basically indistinguishable from feature type? 
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