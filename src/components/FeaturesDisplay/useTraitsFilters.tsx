import { useState, useEffect } from 'react';
import chooseFrom from '../../utilities/chooseFrom';

type Traits = ReadonlyArray<{
  readonly desc: ReadonlyArray<string | null> | null;
  readonly index: string | null;
  readonly name: string | null;
  readonly parent: {
    readonly index: string | null;
    readonly name: string | null;
  } | null;
  readonly proficiencies: ReadonlyArray<{
    readonly index: string | null;
    readonly name: string | null;
    readonly type: string | null;
  }>;
  readonly proficiency_choices: {
    readonly choose: number | null;
    readonly from: ReadonlyArray<{
      readonly __typename: "TraitProficiency_choicesFrom";
      readonly index: string | null;
      readonly name: string | null;
    } | null> | null;
    readonly type: string | null;
  } | null;
  readonly trait_specific: {
    readonly breath_weapon: {
      readonly damage: ReadonlyArray<{
        readonly damage_at_character_level: any | null;
      } | null> | null;
      readonly dc: {
        readonly dc_type: {
          readonly index: string | null;
          readonly name: string | null;
        } | null;
        readonly success_type: string | null;
      } | null;
      readonly desc: string | null;
      readonly name: string | null;
      readonly usage: {
        readonly times: number | null;
        readonly type: string | null;
      } | null;
    } | null;
    readonly damage_type: {
      readonly index: string | null;
      readonly name: string | null;
    } | null;
    readonly spell_options: {
      readonly choose: number | null;
      readonly from: ReadonlyArray<{
        readonly __typename: "TraitTrait_specificSpell_optionsFrom";
        readonly index: string | null;
        readonly name: string | null;
      } | null> | null;
      readonly type: string | null;
    } | null;
    readonly subtrait_options: {
      readonly choose: number | null;
      readonly from: ReadonlyArray<{
        readonly __typename: "TraitTrait_specificSubtrait_optionsFrom";
        readonly index: string | null;
        readonly name: string | null;
        readonly url: string | null;
      } | null> | null;
      readonly type: string | null;
    } | null;
  } | null;
}>;

export default function useTraitsFilters(racialTraits: Traits, characterRace: CharacterRace) {

  const [traitSpecificSelections, setTraitSpecificSelections] = useState<{[key: string]: any}>({})
  const [traitSpecificOptions, setTraitSpecificOptions] = useState<{[key: string]: any}>({});

  // settraitSpecificOptions
  useEffect(() => {
      racialTraits.forEach((trait) => {
        // if there is a trait specific option
        if (trait?.trait_specific) {
          const selections = chooseFrom(trait
            ?.trait_specific
            ?.subtrait_options)
        // add the indices from the options
          const addToTraitSpecificOptions = trait
            ?.trait_specific
            ?.subtrait_options
            ?.from
            ?.map((obj) => obj.index) || []
          setTraitSpecificOptions((prev: {[key: string]: string[]}) => {
            // add the trait index as key and the array of option indices to the traitSpecificOptions
            return {...prev, [String(trait?.index)]: addToTraitSpecificOptions};
          });
        }
      })
    }, [characterRace]);

  // settraitSpecificSelections
  useEffect(() => {
    racialTraits.forEach((trait) => {
      // if there is a trait specific option
      if (trait?.trait_specific) {
        // make the appropriate number of selections
        const selections = chooseFrom(trait
          ?.trait_specific
          ?.subtrait_options);
        // save the selection indices to the selections map
        const selectionIndices = selections.map(selection => selection?.index);
        setTraitSpecificSelections((prev:{[key: string]: string[]}) => {
          return {...prev, [String(trait?.index)]: selectionIndices}
        })
      }
    })
  }, [characterRace]);

  return {
    traitSpecificSelections, traitSpecificOptions
  }
}

