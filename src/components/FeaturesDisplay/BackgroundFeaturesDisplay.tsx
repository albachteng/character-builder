import { MappingFunc } from '../../types';
import BackgroundFeature from './BackgroundFeature';
import { useId } from 'react';
import RenderMap from '../RenderMap';
import type { BackgroundFeaturesDisplayFragment_feature$key } from './__generated__/BackgroundFeaturesDisplayFragment_feature.graphql'
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
  backgroundRef: BackgroundFeaturesDisplayFragment_feature$key
  characterBackground: Background
}

function BackgroundFeaturesDisplay({classRef, characterClass }: Props): JSX.Element {

  const {backgroundFeature} = useFragment(
    graphql`fragment BackgroundFeaturesDisplayFragment_background on Background {
      feature {
        ...BackgroundFeatureFragment_feature
      }
    }`, backgroundRef)

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      <h2>Background Feature</h2>
      <BackgroundFeature
        key={useId()}
        backgroundFeatureRef={backgroundFeature}
      />
    </div>
  );
}

export default BackgroundFeaturesDisplay;
