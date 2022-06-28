import { useEffect, useState } from 'react';
import useCharacter, { getRandom } from '../../hooks/useCharacter';
import {
  BackgroundFeature,
  Feature as FeatureType,
  Trait,
  Choice,
  Maybe,
  FeatureFeature_SpecificSubfeature_OptionsFrom,
  TraitTrait_SpecificSubtrait_OptionsFrom
} from "../../types";
import { MappingFunc } from '../../types';
import CharacterContext from '../CharacterContext';
import QueryRenderer from '../QueryRenderer';
import Feature from './Feature';
import { makeUniqueId } from '@apollo/client/utilities';
import RenderMap from '../RenderMap';
import chooseFrom from '../../utilities/chooseFrom';

type Props = {
  classFeatures: FeatureType[]
  racialFeatures: Trait[]
  backgroundFeatures: BackgroundFeature
}
function FeaturesDisplay({classFeatures, racialFeatures, backgroundFeatures}: Props): JSX.Element {

  const [featureSpecificSelections, setfeatureSpecificSelections] = useState<object>({})
  const [featureSpecificOptions, setfeatureSpecificOptions] = useState<object>({});

  useEffect(() => {
    [...classFeatures, ...racialFeatures].forEach((feature: FeatureType | Trait) => {
      let specifierKey, optionsKey;
      if (feature?.__typename === 'Feature') {
        specifierKey = 'feature_specific';
        optionsKey = 'subfeature_options';
      } else {
        specifierKey = 'trait_specific';
        optionsKey = 'subtrait_options';
      }
      if (feature?.[specifierKey]) {
        const selections = chooseFrom(feature
          ?.[specifierKey]
          ?.[optionsKey] as Choice<Maybe<
            FeatureFeature_SpecificSubfeature_OptionsFrom
          | TraitTrait_SpecificSubtrait_OptionsFrom >>
        )
        const selectionIndices = selections.map(selection => selection?.index);
        const addTofeatureSpecificOptions = feature
          ?.[specifierKey]
          ?.[optionsKey]
          ?.from
          ?.map((obj: any) => obj.index) || []
        setfeatureSpecificOptions((prev: {[key: string]: any}) => {
          return {...prev, [String(feature?.index)]: addTofeatureSpecificOptions};
        });
        setfeatureSpecificSelections((prev:{[key: string]: any}) => {
          return {...prev, [String(feature?.index)]: selectionIndices}
        })
      }
    })
  }, []);

  const featuresMap: MappingFunc<FeatureType | Trait | BackgroundFeature> = (feature, index) => {
    const featSpec = feature?.feature_specific?.subfeature_options;
    const traitSpec = feature?.trait_specific?.subtrait_options;
    const whiteList = [];
    for (let key in featureSpecificSelections) {
      whiteList.push(...featureSpecificSelections[key]) // TODO this is super ineficient, we should probably get this some other way
    }
    console.log({whiteList})
    let show = true;
    if (feature?.__typename === 'Trait' || feature?.__typename === 'Feature') {
      // if it's in options but not the whitelist, show = false
      for (let key in featureSpecificSelections) {

        if (featureSpecificOptions[key].includes(feature?.index) && !whiteList.includes(feature?.index)) {
          show = false;
        }
      }
    }

    return (
      <Feature
        show={show}
        key={makeUniqueId('feature')}
        feature={feature}
        featureSpecificSelections={featureSpecificSelections}
      />
    );
  };

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      <pre>{JSON.stringify(featureSpecificSelections, null, 2)}</pre>
      <pre>{JSON.stringify(featureSpecificOptions, null, 2)}</pre>
      <h2>Features</h2>
      <RenderMap
        mappingFunc={featuresMap}
        data={[...racialFeatures, backgroundFeatures, ...classFeatures]}
      />
    </div>
  );
}

export default FeaturesDisplay;
