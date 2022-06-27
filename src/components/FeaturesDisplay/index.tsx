import { useEffect, useState } from 'react';
import { getRandom } from '../../hooks/useCharacter';
import { ClassFeatures, RacialFeatures, BackgroundFeatures } from '../../queries';
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

  const [featureSpecificChoice, setFeatureSpecificChoice] = useState<{[key: string]: string}>({})

  useEffect(() => {
    classFeatures.forEach((feature: FeatureType) => {
      if (feature?.__typename === 'Feature' && feature?.feature_specific) {
        const selections = chooseFrom(feature
          ?.feature_specific
          ?.subfeature_options as Choice<Maybe<FeatureFeature_SpecificSubfeature_OptionsFrom>>
        )
        const selectionIndices = selections.map(selection => selection?.name)
        setFeatureSpecificChoice((prev: {[key: string]: any}) => {
          return {...prev, [String(feature.name)]: selectionIndices}
        })
        console.log({featureSpecificChoice})
      }
    })
    racialFeatures.forEach((feature: Trait) => {
      if (feature?.__typename === 'Trait' && feature?.trait_specific) {
        const selections = chooseFrom(feature?.trait_specific.subtrait_options as Choice<Maybe<TraitTrait_SpecificSubtrait_OptionsFrom>>)
        const selectionIndices = selections.map(selection => selection?.name)
        setFeatureSpecificChoice((prev: {[key: string]: any}) => {
          return {...prev, [String(feature.name)]: selectionIndices}
        })
        console.log({featureSpecificChoice})
      }
    })
  }, [])

  const featuresMap: MappingFunc<FeatureType | Trait | BackgroundFeature> = (feature, index) => {
    return (
      <Feature
        key={makeUniqueId('feature')}
        feature={feature}
        // featureSpecificChoice={featureSpecificChoice}
        // setFeatureSpecificChoice={setFeatureSpecificChoice}
      />
    );
  };

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      <pre>{JSON.stringify(featureSpecificChoice)}</pre>
      <h2>Features</h2>
      <RenderMap
        mappingFunc={featuresMap}
        data={[...racialFeatures, backgroundFeatures, ...classFeatures]}
      />
    </div>
  );
}

export default FeaturesDisplay;
