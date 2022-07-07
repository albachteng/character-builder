import Trait from './Trait';
import useTraitsFilters from './useTraitsFilters';
import type { TraitsDisplayFragment_race$key } from './__generated__/TraitsDisplayFragment_race.graphql'
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { useState, useEffect } from 'react';
import chooseFrom from '../../utilities/chooseFrom';

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

  const [traitSpecificSelections, setTraitSpecificSelections] = useState<{[key: string]: any}>({})
  const [traitSpecificOptions, setTraitSpecificOptions] = useState<{[key: string]: any}>({});

  // settraitSpecificOptions
  useEffect(() => {
    traits.forEach((trait) => {
      if (trait?.trait_specific) {
        const selections = chooseFrom(trait?.trait_specific?.subtrait_options)
        // add the indices from the options
        const addTotraitSpecificOptions = trait?.trait_specific?.subtrait_options?.from
          ?.map((obj) => obj.index) || []
        setTraitSpecificOptions((prev: {[key: string]: string[]}) => {
          // add the trait index as key and the array of option indices to the traitSpecificOptions
          return {...prev, [String(trait?.index)]: addTotraitSpecificOptions};
        });
      }}
    )}, [traits]);

  // settraitSpecificSelections
  useEffect(() => {
    traits.forEach((trait) => {
      // if there is a trait specific option
      if (trait?.trait_specific) {
        // make the appropriate number of selections
        const selections = chooseFrom(trait?.trait_specific?.subtrait_options)
        // save the selection indices to the selections map
        const selectionIndices = selections.map(selection => selection?.index);
        setTraitSpecificSelections((prev:{[key: string]: string[]}) => {
          return {...prev, [String(trait?.index)]: selectionIndices}
        })
      }
    }
  )}, [traits]);

  const whiteList: Array<any> = [];
  for (let key in traitSpecificSelections) {
    if (traitSpecificSelections.hasOwnProperty(key)) whiteList.push(...traitSpecificSelections?.[key])
    // TODO not super eficient, we should probably get this some other way
  }

  const raceTitle = characterRace[0].toUpperCase() + characterRace.slice(1)

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      <h2>{`Racial Traits: ${raceTitle}`}</h2>
      {traits.map((trait, i, traits) => {
        const shouldRender = () => {
          // if it's on the whitelist, we're good
          if (whiteList.includes(trait?.index)) return true;
          else {
            // otherwise make sure it's not on the selection list
            for (let key in traitSpecificOptions) {
              // if it's on any selection list but not the whitelist, don't show it
              if (traitSpecificOptions[key].includes(trait?.index)) return false;
            }
            return true;
          }
        }
        return (<Trait
          key={traits?.[i]?.index}
          traitRef={traits?.[i]}
          shouldRender={shouldRender()}
        />)
      })}
    </div>
  );
}

export default TraitsDisplay;
