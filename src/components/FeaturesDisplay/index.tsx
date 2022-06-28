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

  const whiteList: string[] = [];
  for (let key in featureSpecificSelections) {
    if (featureSpecificSelections.hasOwnProperty(key)) whiteList.push(...featureSpecificSelections?.[key] as string) // TODO not super eficient, we should probably get this some other way
  }

  const featuresMap: MappingFunc<FeatureType | Trait | BackgroundFeature> = (feature, index) => {
    let show = true;
    if (feature?.__typename === 'Trait' || feature?.__typename === 'Feature') {
      // if it's in options but not the whitelist, show = false
      for (let key in featureSpecificSelections) {
        if (featureSpecificOptions?.[key]?.includes(feature?.index) && !whiteList?.includes(feature?.index as string)) {
          show = false;
          break; // no reason to keep going, this one is meant to not be shown
        }
      }
    }

    return (
      <Feature
        show={show}
        key={makeUniqueId('feature')}
        feature={feature}
        // featureSpecificSelections={featureSpecificSelections}
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
