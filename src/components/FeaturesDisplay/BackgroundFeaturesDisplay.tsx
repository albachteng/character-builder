import BackgroundFeature from './BackgroundFeature';
import type { BackgroundFeaturesDisplayFragment_feature$key } from './__generated__/BackgroundFeaturesDisplayFragment_feature.graphql'
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { Background } from '../../types';
import capitalize from '../../utilities/capitalize';

type Props = {
  backgroundRef: BackgroundFeaturesDisplayFragment_feature$key
  characterBackground: Background
  children: React.ReactNode
}

function BackgroundFeaturesDisplay({backgroundRef, characterBackground, children}: Props): JSX.Element {

  const { feature: backgroundFeature } = useFragment(
    graphql`fragment BackgroundFeaturesDisplayFragment_background on Background {
      feature {
        ...BackgroundFeatureFragment_feature
      }
    }`, backgroundRef)

  const backgroundTitle = capitalize(characterBackground)

  return (
    <section>
      <h2>Background: {backgroundTitle}</h2>
      <BackgroundFeature
        backgroundFeatureRef={backgroundFeature}
      />
      {children}
    </section>
  );
}

export default BackgroundFeaturesDisplay;
