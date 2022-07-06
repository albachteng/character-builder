import BackgroundFeature from './BackgroundFeature';
import type { BackgroundFeaturesDisplayFragment_feature$key } from './__generated__/BackgroundFeaturesDisplayFragment_feature.graphql'
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
  backgroundRef: BackgroundFeaturesDisplayFragment_feature$key
  characterBackground: Background
}

function BackgroundFeaturesDisplay({backgroundRef, characterBackground}: Props): JSX.Element {

  const { backgroundFeature } = useFragment(
    graphql`fragment BackgroundFeaturesDisplayFragment_background on Background {
      feature {
        ...BackgroundFeatureFragment_feature
      }
    }`, backgroundRef)

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      <h2>Background Feature</h2>
      {backgroundFeature && <BackgroundFeature
        backgroundFeatureRef={backgroundFeature}
      />}
    </div>
  );
}

export default BackgroundFeaturesDisplay;
