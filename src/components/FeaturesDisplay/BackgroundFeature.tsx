import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import useOnClickDescription from "../../hooks/useOnClickDescription";
import type { FeatureFragment_background_feature$key } from './__generated__/FeatureFragment_background_feature.graphql';

type Props = {
  backgroundFeatureRef: BackgroundFeatureFragment_feature$key
};

function BackgroundFeature({ backgroundFeatureRef}: Props) {

  const feature = useFragment(
    graphql`fragment BackgroundFeatureFragment_feature on BackgroundFeature {
      name
      __typename
      desc
    }`, backgroundFeatureRef);

  const { description, toggleDescription } = useOnClickDescription(feature);

  const {name, __typename, level} = feature

  return (
    <>
      {(
        <div>
          <p onClick={toggleDescription}>
            {name}
            {__typename &&
              ` | From: Background`}
          </p>
          {description}
        </div>
      )}
    </>
  );
}

export default BackgroundFeature;
