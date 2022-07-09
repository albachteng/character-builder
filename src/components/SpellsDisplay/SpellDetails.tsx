import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { AbilityScores } from '../../types';
import type { SpellDetailsFragment_spell$key } from './__generated__/SpellDetailsFragment_spell.graphql';

type Props = {
  spellRef: SpellDetailsFragment_spell$key
};

const handleStringArray = (arr: (string | null)[], type: string) => {
  if (Array.isArray(arr)) {
    if (type === 'li') {
      return arr.map((str: string | null, index) => <li key={`${str}${index}`}>{str}</li>);
    }
    if (type === 'span') {
      return arr.map((str: string | null, index, arr) => (
        <span key={`${str}${index}`}>
          {str}
          {arr.length - 1 !== index ? ', ' : ''}
        </span>
      ));
    }
    if (type === 'p') {
      return arr.map((str: string | null, index) => <p key={`${str}${index}`}>{str}</p>);
    }
  } else return [];
};

function SpellDetails({ spellRef }: Props) {

const {
  area_of_effect,
  attack_type,
  casting_time,
  components,
  concentration,
  damage,
  dc,
  desc,
  duration,
  heal_at_slot_level,
  higher_level,
  index,
  material,
  range,
  ritual,
  school
  } = useFragment(graphql`
    fragment SpellDetailsFragment_spell on Spell {
      area_of_effect {
        size
        type
      }
      attack_type
      casting_time
      components
      concentration
      damage {
        damage_at_slot_level
        damage_at_character_level
        damage_type {
          index
          name
        }
      }
      dc {
        dc_success
        dc_type {
          index
          name
        }
        desc
      }
      desc
      duration
      heal_at_slot_level
      higher_level
      index
      material
      range
      ritual
      school {
        desc
        index
        name
      }
    }`, spellRef);

  return (
    <div>
      {desc && handleStringArray(desc, 'p')}
      <div>
        {casting_time && (
        <p>
          Casting Time:
          {casting_time}
        </p>
        )}
        {range && (
        <p>
          Range:
          {range}
        </p>
        )}
        {components && (
          <p>
            Components:
            {handleStringArray(components, 'span')}
          </p>
        )}
        {material && (
        <p>
          Materials:
          {material}
        </p>
        )}
        {duration && (
        <p>
          Duration:
          {duration}
        </p>
        )}
        {/* {classes && ( */}
        {/*   <p> */}
        {/*     Classes: */}
        {/*     {' '} */}
        {/*     {handleStringArray( */}
        {/*       classes?.map((namedClassIndex) => namedClassIndex?.index || ''), */}
        {/*       'span', */}
        {/*     )} */}
        {/*   </p> */}
        {/* )} */}
      </div>
      {area_of_effect && (
        <p>
          Area of Effect:
          {' '}
          {area_of_effect?.size}
          ft.
          {' '}
          {area_of_effect.type}
        </p>
      )}
      {attack_type && (
      <p>
        Attack Type:
        {attack_type}
      </p>
      )}
      {concentration && <p>Concentration</p>}
      {ritual && <p>Ritual</p>}
      {damage && JSON.stringify(damage, null, 3)}
      {dc && dc?.dc_success && (
        <p>
          DC:
          {' '}
          {dc?.dc_success}
          {' '}
          {dc?.dc_type?.name}
          {' '}
          save
        </p>
      )}
      {dc && dc?.desc && handleStringArray([dc?.desc], 'p')}
      {heal_at_slot_level && (
        <p>
          Healing:
          {JSON.stringify(heal_at_slot_level, null, 3)}
        </p>
      )}
      {higher_level && <h5>At Higher Levels: </h5>}
      {higher_level && handleStringArray(higher_level, 'p')}
      {
        school && (
          <p>
            School:
            {school.name}
          </p>
        ) /* name, index, desc, typename */
      }
      {school && school?.desc && <span>{school?.desc}</span>}
    </div>
  );
}

export default SpellDetails;
