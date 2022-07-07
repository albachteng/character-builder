import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import useOnClickDescription from "../../hooks/useOnClickDescription";
import type { FeatureFragment_feature$key } from './__generated__/FeatureFragment_feature_feature.graphql';

type Props = {
  featureRef: FeatureFragment_feature$key
};

function Feature({ featureRef, shouldRender}: Props) {

  const feature = useFragment(
    graphql`fragment FeatureFragment_feature on Feature {
      name
      index
      __typename
      level
      desc
    }`, featureRef);

  const { name, level } = feature;
  const { description, toggleDescription } = useOnClickDescription(feature);

  return (
    <>
      {(
        <div className={shouldRender ? '' : 'hidden'}>
          <p onClick={toggleDescription}>
            {name}
            {`, Level ${level}`}
            {" | From: Class Features"}
          </p>
          {description}
        </div>
      )}
    </>
  );
}

export default Feature;
