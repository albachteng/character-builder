import BackgroundFeature from './BackgroundFeature';
import type { BackgroundFeaturesDisplayFragment_feature$key } from './__generated__/BackgroundFeaturesDisplayFragment_feature.graphql'
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { Background } from '../../types';

type Props = {
  backgroundRef: BackgroundFeaturesDisplayFragment_feature$key
  characterBackground: Background
}

function BackgroundFeaturesDisplay({backgroundRef, characterBackground}: Props): JSX.Element {

  const { feature: backgroundFeature } = useFragment(
    graphql`fragment BackgroundFeaturesDisplayFragment_background on Background {
      feature {
        ...BackgroundFeatureFragment_feature
      }
    }`, backgroundRef)

  const backgroundTitle = characterBackground[0].toUpperCase() + characterBackground.slice(1)

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      <h2>Background Feature: {backgroundTitle}</h2>
      <BackgroundFeature
        backgroundFeatureRef={backgroundFeature}
      />
    </div>
  );
}

export default BackgroundFeaturesDisplay;
