import { useEffect, useState } from 'react';
import { getRandom } from '../../hooks/useCharacter';
import { ClassFeatures, RacialFeatures, BackgroundFeatures } from '../../queries';
import type { BackgroundFeature, Feature as FeatureType, Trait } from '../../types';
import { MappingFunc } from '../../types';
import CharacterContext from '../CharacterContext';
import QueryRenderer from '../QueryRenderer';
import Feature from './Feature';
import { makeUniqueId } from '@apollo/client/utilities';
import RenderMap from '../RenderMap';

type Props = {
  classFeatures: FeatureType[]
  racialFeatures: Trait[]
  backgroundFeatures: BackgroundFeature
}
function FeaturesDisplay({classFeatures, racialFeatures, backgroundFeatures}: Props): JSX.Element {

  const [featureSpecificChoice, setFeatureSpecificChoice] = useState<any[]>([]);

  const featuresMap: MappingFunc<FeatureType | Trait | BackgroundFeature> = (feature, index) => {
    return (
      <Feature
        key={makeUniqueId('feature')}
        feature={feature}
        setFeatureSpecificChoice={setFeatureSpecificChoice}
      />
    );
  };

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      <pre>{JSON.stringify(featureSpecificChoice, null, 2)}</pre>
      <h2>Features</h2>
      <RenderMap
        mappingFunc={featuresMap}
        data={[...racialFeatures, backgroundFeatures, ...classFeatures]}
      />
    </div>
  );
}

export default FeaturesDisplay;
