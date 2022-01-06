import { Spell } from '../types';

type Props = {
    spell: Spell
    id: string
}

const handleStringArray = (arr: string[], type: string) => {
    if (Array.isArray(arr)) {
        if (type === 'li') {
            return arr.map((str: string, index) => {
                return <li key={`${str}${index}`}>{str}</li>
            });
        }
        if (type === 'span') {
            return arr.map((str: string, index) => {
                return <span key={`${str}${index}`}>{str}, </span>
            });
        }
        if (type === 'p') {
            return arr.map((str: string, index) => {
                return <p key={`${str}${index}`}>{str}</p>
            });
        }
    } else return []};

const SpellDetails = ({spell}: Props) => {

    return (
        <>
            {spell.desc && handleStringArray(spell.desc, 'p')}
            {spell.area_of_effect && <p>Area of Effect: {spell.area_of_effect.size} ft. {spell.area_of_effect.type}</p>}
            {spell.attack_type && <p>Attack Type: {spell.attack_type}</p>}
            {spell.casting_time && <p>Casting Time: {spell.casting_time}</p>}
            {/* TODO {spell.classes && spell.classes.forEach((characterClass) => ) */}
            {/* /* NTS: array of typename and index */}
            {spell.components && <p>Components: {handleStringArray(spell.components, 'span')}</p>}
            {spell.concentration && <p>Concentration</p>}
            {/* {spell.damage && <p>Damage: {spell.damage</p> */}
            {spell.damage && JSON.stringify(spell.damage)}
            {/* TODO */}
            {spell.dc && spell.dc.dc_success && <p>DC: {spell.dc.dc_success} {spell.dc.dc_type.name} save</p>}
            {spell.dc && spell.dc.desc && handleStringArray(spell.dc.desc, 'p')}
            {spell.duration && <p>Duration: {spell.duration}</p>}
            {/* {spell.heal_at_slot_level && <p>Healing: {spell.heal_at_slot_level}</p> */}
            {/* TODO */}
            {spell.higher_level && <ul>At Higher Levels: {handleStringArray(spell.higher_level, 'li')}</ul>}
            {spell.material && <p>Materials: {spell.material}</p>}
            {spell.range && <p>Range: {spell.range}</p>}
            {spell.ritual && <p>Ritual</p>}
            {spell.school && <p>School: {spell.school.name}</p> /* name, index, desc, typename */ }
            {spell.school && spell.school.desc && handleStringArray(spell.school.desc, 'p')}
            {/* {spell.subclasses && <ul>Subclasses: {handleStringArray(spell.subclasses.map((subclass) => subclass.name), 'span')}</ul> /* name, index, typename */}
        </>
    )
};

export default SpellDetails;