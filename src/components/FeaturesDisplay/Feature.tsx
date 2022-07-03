import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import useOnClickDescription from "../../hooks/useOnClickDescription";
import type { FeatureFragment_feature$key } from './__generated__/FeatureFragment_feature_feature.graphql';

type Props = {
  featureRef: FeatureFragment_feature$key
};

function Feature({ featureRef }: Props) {

  const feature = useFragment(
    graphql`fragment FeatureFragment_feature on Feature {
      name
      index
      __typename
      level
      desc
    }`, featureRef);

  const { description, toggleDescription } = useOnClickDescription(feature);

  return (
    <>
      {(
        <div>
          <p onClick={toggleDescription}>
            {feature?.name}
            {`, Level ${feature?.level}`}
            {feature?.__typename &&
              ` | From: Class Features`}
          </p>
          {description}
        </div>
      )}
    </>
  );
}

export default Feature;
