import { AbilityScore, Spell } from '../types';

type Props = {
    spell: Spell
    id: string
    characterStats: AbilityScore 
}

const handleStringArray = (arr: string[], type: string) => {
    if (Array.isArray(arr)) {
        if (type === 'li') {
            return arr.map((str: string, index) => {
                return <li key={`${str}${index}`}>{str}</li>
            });
        }
        if (type === 'span') {
            return arr.map((str: string, index, arr) => {
                return <span key={`${str}${index}`}>{str}{arr.length - 1 !== index ? ', ' : ''}</span>
            });
        }
        if (type === 'p') {
            return arr.map((str: string, index) => {
                return <p key={`${str}${index}`}>{str}</p>
            });
        }
    } else return []};

const SpellDetails = ({spell}: Props) => {
    console.log({spell});
    return (
        <div>
            {spell.desc && handleStringArray(spell.desc, 'p')}

            <div>
                {spell.casting_time && <p>Casting Time: {spell.casting_time}</p>}
                {spell.range && <p>Range: {spell.range}</p>}
                {spell.components && <p>Components: {handleStringArray(spell.components, 'span')}</p>}
                {spell.material && <p>Materials: {spell.material}</p>}
                {spell.duration && <p>Duration: {spell.duration}</p>}
                {spell.classes && <p>Classes: {handleStringArray(spell.classes.map((characterClass) => characterClass.index), 'span')}</p>}
            </div>
            {spell.area_of_effect && <p>Area of Effect: {spell.area_of_effect.size}ft. {spell.area_of_effect.type}</p>}
            {spell.attack_type && <p>Attack Type: {spell.attack_type}</p>}
            {spell.concentration && <p>Concentration</p>}
            {spell.ritual && <p>Ritual</p>}
            {spell.damage && JSON.stringify(spell.damage)}
            {spell.dc && spell.dc.dc_success && <p>DC: {spell.dc.dc_success} {spell.dc.dc_type.name} save</p>}
            {spell.dc && spell.dc.desc && handleStringArray(spell.dc.desc, 'p')}
            {spell.heal_at_slot_level && <p>Healing: {JSON.stringify(spell.heal_at_slot_level)}</p>}
            {spell.higher_level && <h5>At Higher Levels: </h5>}
            {spell.higher_level && handleStringArray(spell.higher_level, 'p')}
            {spell.school && <p>School: {spell.school.name}</p> /* name, index, desc, typename */ }
            {spell.school && spell.school.desc && <span>{spell.school.desc}</span>}
            {spell.subclasses && <p>Subclasses: {handleStringArray(spell.subclasses.map((subclass) => subclass.name), 'span')}</p>}
        </div>
    )
};

export default SpellDetails;