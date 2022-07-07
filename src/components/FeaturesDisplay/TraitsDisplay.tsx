import Trait from './Trait';
import useTraitsFilters from './useTraitsFilters';
import type { TraitsDisplayFragment_race$key } from './__generated__/TraitsDisplayFragment_race.graphql'
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
  raceRef: TraitsDisplayFragment_race$key
  characterRace: Race
}

function TraitsDisplay({ raceRef, characterRace }: Props): JSX.Element {

  const { traits } = useFragment(
    graphql`fragment TraitsDisplayFragment_race on Race {
      traits {
        ...TraitFragment_trait
        index
        proficiencies {
          index
          name
          type
        }
        proficiency_choices {
          choose
          from {
            name
            index
            __typename
          }
          type
        }
        parent {
          index
          name
        }
        trait_specific {
          subtrait_options {
            choose
            from {
              __typename
              index
              name
              url
            }
            type
          }
          spell_options {
            choose
            from {
              name
              index
              __typename
            }
            type
          }
          damage_type {
            index
            name
          }
          breath_weapon {
            name
            desc
            usage {
              type
              times
            }
            dc {
              dc_type {
                index
                name
              }
              success_type
            }
            damage {
              damage_at_character_level
            }
          }
        }
      }
  }`, raceRef)

  // const { traitSpecificOptions, traitSpecificSelections } = useTraitsFilters(traits, characterRace)

  // const whiteList: Array<any> = [];
  // for (let key in traitSpecificSelections) {
  //   if (traitSpecificSelections.hasOwnProperty(key)) whiteList.push(...traitSpecificSelections?.[key])
  //   // TODO not super eficient, we should probably get this some other way
  // }
  //
  // function traitFilter(input: typeof traits) {
  //   const traits = input;
  //   return traits?.filter((trait) => {
  //     // if it's in options but not the whitelist, it should be filtered
  //     for (let key in traitSpecificSelections) {
  //       if (traitSpecificOptions?.[key]?.includes(trait?.index) && !whiteList?.includes(trait?.index)) {
  //         return false;
  //       }
  //     }
  //       return true;
  //     })
  // }
const raceTitle = characterRace[0].toUpperCase() + characterRace.slice(1)

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      <h2>{`Racial Traits: ${raceTitle}`}</h2>
      {traits.map((_, i, traits) => {
        return (<Trait
          key={traits?.[i]?.index}
          traitRef={traits?.[i]}
        />)
      })}
    </div>
  );
}

export default TraitsDisplay;
