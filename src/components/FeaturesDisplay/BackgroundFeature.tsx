import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import useOnClickDescription from "../../hooks/useOnClickDescription";
import type { FeatureFragment_background_feature$key } from './__generated__/FeatureFragment_background_feature.graphql';

type Props = {
  backgroundFeatureRef: FeatureFragment_background_feature$key
};

function BackgroundFeature({ backgroundFeatureRef}: Props) {

  const feature = useFragment(
    graphql`fragment BackgroundFeatureFragment_feature on BackgroundFeature {
      name
      # index
      __typename
      desc
    }`, backgroundFeatureRef);

  const { description, toggleDescription } = useOnClickDescription(feature);

  return (
    <>
      {(
        <div>
          <p onClick={toggleDescription}>
            {feature?.name}
            {`, Level ${feature?.level}`}
            {feature?.__typename &&
              ` | From: Background`}
          </p>
          {description}
        </div>
      )}
    </>
  );
}

export default BackgroundFeature;
