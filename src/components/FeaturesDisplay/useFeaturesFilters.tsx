import { useState, useEffect } from 'react';
import chooseFrom from '../../utilities/chooseFrom';

type ClassFeatures = {
  readonly features: ReadonlyArray<{
    readonly choice: {
      readonly choose: number | null;
      readonly type: string | null;
    } | null;
    readonly class: {
      readonly hit_die: number | null;
      readonly index: string | null;
      readonly name: string | null;
      readonly url: string | null;
    } | null;
    readonly desc: ReadonlyArray<string | null> | null;
    readonly feature_specific: {
      readonly expertise_options: {
        readonly choose: number | null;
        readonly from: ReadonlyArray<{
          readonly __typename: "FeatureFeature_specificExpertise_optionsFrom";
          readonly index: string | null;
          readonly name: string | null;
        } | null> | null;
        readonly type: string | null;
      } | null;
      readonly subfeature_options: {
        readonly choose: number | null;
        readonly from: ReadonlyArray<{
          readonly __typename: "FeatureFeature_specificSubfeature_optionsFrom";
          readonly index: string | null;
          readonly name: string | null;
          readonly url: string | null;
        } | null> | null;
        readonly type: string | null;
      } | null;
    } | null;
    readonly index: string | null;
    readonly level: number | null;
    readonly name: string | null;
    readonly parent: {
      readonly index: string | null;
      readonly name: string | null;
      readonly url: string | null;
    } | null;
    readonly prerequisites: ReadonlyArray<{
      readonly level: number | null;
      readonly type: string | null;
    } | null> | null;
    readonly url: string | null;
  }>;
}

export default function useFeaturesFilters(classFeatures: ClassFeatures, characterClass: CharacterClass) {

  const [featureSpecificSelections, setfeatureSpecificSelections] = useState<{[key: string]: any}>({})
  const [featureSpecificOptions, setfeatureSpecificOptions] = useState<{[key: string]: any}>({});

  // setFeatureSpecificOptions
  useEffect(() => {
      classFeatures.forEach((feature) => {
        // if there is a feature specific option
        if (feature?.feature_specific) {
          const selections = chooseFrom(feature
            ?.feature_specific
            ?.subfeature_options)
        // add the indices from the options
          const addToFeatureSpecificOptions = feature
            ?.feature_specific
            ?.subfeature_options
            ?.from
            ?.map((obj) => obj.index) || []
          setfeatureSpecificOptions((prev: {[key: string]: string[]}) => {
            // add the feature index as key and the array of option indices to the featureSpecificOptions
            return {...prev, [String(feature?.index)]: addToFeatureSpecificOptions};
          });
        }
      })
    }, [characterClass]);

  // setfeatureSpecificSelections
  useEffect(() => {
    classFeatures.forEach((feature) => {
      // if there is a feature specific option
      if (feature?.feature_specific) {
        // make the appropriate number of selections
        const selections = chooseFrom(feature
          ?.feature_specific
          ?.subfeature_options)
        // save the selection indices to the selections map
        const selectionIndices = selections.map(selection => selection?.index);
        setfeatureSpecificSelections((prev:{[key: string]: string[]}) => {
          return {...prev, [String(feature?.index)]: selectionIndices}
        })
      }
    })
  }, [characterClass]);

  return {
    featureSpecificSelections, featureSpecificOptions
  }
}

