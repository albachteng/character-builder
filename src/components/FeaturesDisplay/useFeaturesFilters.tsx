import { useState, useEffect } from 'react';
import {
  Feature as FeatureType,
  Trait,
  Choice,
  Maybe,
  FeatureFeature_SpecificSubfeature_OptionsFrom,
  TraitTrait_SpecificSubtrait_OptionsFrom
} from "../../types";
import chooseFrom from '../../utilities/chooseFrom';

export default function useFeaturesFilters(classFeatures: FeatureType[], racialFeatures: Trait[]) {

  function getTraitsOrFeaturesKeys(type: string) {
    let specifierKey, optionsKey;
    if (type === 'Feature') {
      specifierKey = 'feature_specific';
      optionsKey = 'subfeature_options';
    } else {
      specifierKey = 'trait_specific';
      optionsKey = 'subtrait_options';
    }
    return [specifierKey, optionsKey];
  }

  const [featureSpecificSelections, setfeatureSpecificSelections] = useState<{[key: string]: any}>({})
  const [featureSpecificOptions, setfeatureSpecificOptions] = useState<{[key: string]: any}>({});

  // setFeatureSpecificOptions
  useEffect(() => {
      [...classFeatures, ...racialFeatures].forEach((feature: FeatureType | Trait) => {
        const [specifierKey, optionsKey] = getTraitsOrFeaturesKeys(feature?.__typename as string);
        if (feature?.[specifierKey]) {
          const selections = chooseFrom(feature
            ?.[specifierKey]
            ?.[optionsKey] as Choice<Maybe<
              FeatureFeature_SpecificSubfeature_OptionsFrom
            | TraitTrait_SpecificSubtrait_OptionsFrom >>
          )
          const addToFeatureSpecificOptions = feature
            ?.[specifierKey]
            ?.[optionsKey]
            ?.from
            ?.map((obj: any) => obj.index) || []
          setfeatureSpecificOptions((prev: {[key: string]: any}) => {
            // if (prev[String(feature?.index)]) return prev[String(feature?.index)] = addToFeatureSpecificOptions;
            return {...prev, [String(feature?.index)]: addToFeatureSpecificOptions};
          });
        }
      })
    }, [classFeatures, racialFeatures]);

  // setfeatureSpecificSelections
  useEffect(() => {
    [...classFeatures, ...racialFeatures].forEach((feature: FeatureType | Trait) => {
      const [specifierKey, optionsKey] = getTraitsOrFeaturesKeys(feature?.__typename as string);
      if (feature?.[specifierKey]) {
        const selections = chooseFrom(feature
          ?.[specifierKey]
          ?.[optionsKey] as Choice<Maybe<
            FeatureFeature_SpecificSubfeature_OptionsFrom
          | TraitTrait_SpecificSubtrait_OptionsFrom >>
        )
        const selectionIndices = selections.map(selection => selection?.index);
        setfeatureSpecificSelections((prev:{[key: string]: any}) => {
          return {...prev, [String(feature?.index)]: selectionIndices}
        })
      }
    })
  }, [classFeatures, racialFeatures]);

  return {
    featureSpecificSelections, featureSpecificOptions
  }
}

