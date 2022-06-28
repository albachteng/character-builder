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
import useFeaturesFilters from './useFeaturesFilters'

type Props = {
  classFeatures: FeatureType[]
  racialFeatures: Trait[]
  backgroundFeatures: BackgroundFeature
}

function FeaturesDisplay({classFeatures, racialFeatures, backgroundFeatures}: Props): JSX.Element {

  const { featureSpecificOptions, featureSpecificSelections } = useFeaturesFilters(classFeatures, racialFeatures);

  const whiteList: Array<Maybe<string> | undefined> = [];
  for (let key in featureSpecificSelections) {
    if (featureSpecificSelections.hasOwnProperty(key)) whiteList.push(...featureSpecificSelections?.[key] as string) // TODO not super eficient, we should probably get this some other way
  }

  function featuresFilter(features: Array<FeatureType | Trait>) {
    return features.filter((feature) => {
      // if it's in options but not the whitelist, it should be filtered
      for (let key in featureSpecificSelections) {
        if (featureSpecificOptions?.[key]?.includes(feature?.index) && !whiteList?.includes(feature?.index)) {
          return false;
        }
      }
        return true;
      })
  }


  const featuresMap: MappingFunc<FeatureType | Trait | BackgroundFeature> = (feature, index) => {
    return (
      <Feature
        // show={show}
        key={makeUniqueId('feature')}
        feature={feature}
        // featureSpecificSelections={featureSpecificSelections}
      />
    );
  };

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      {/* <pre>{JSON.stringify(featureSpecificSelections, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(featureSpecificOptions, null, 2)}</pre> */}
      <h2>Features</h2>
      <RenderMap
        mappingFunc={featuresMap}
        data={[backgroundFeatures, ...featuresFilter([...racialFeatures, ...classFeatures])]}
      />
    </div>
  );
}

export default FeaturesDisplay;
