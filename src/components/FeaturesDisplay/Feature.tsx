import { useEffect } from "react";
import useOnClickDescription from "../../hooks/useOnClickDescription";
import { BackgroundFeature, Feature as FeatureType, Trait } from "../../types";
import chooseFrom from "../../utilities/chooseFrom";

type Props = {
  feature: FeatureType | Trait | BackgroundFeature;
  setFeatureSpecificChoice: Function
};

const originFromTypename: { [k: string]: string } = {
  Feature: "Class Feature",
  Trait: "Racial Trait",
  BackgroundFeature: "Background Feature",
};

function Feature({ feature, setFeatureSpecificChoice}: Props) {

  const { description, toggleDescription } = useOnClickDescription<FeatureType | Trait | BackgroundFeature>(feature);

  useEffect(() => {
    if (feature?.__typename === 'Feature' && feature?.feature_specific) {
      console.log('setting: ', feature?.feature_specific)
      setFeatureSpecificChoice(feature?.feature_specific)
    }
    if (feature?.__typename === 'Trait' && feature?.trait_specific) {
      console.log('setting: ', feature?.trait_specific)
      setFeatureSpecificChoice(feature?.trait_specific)
    }
  }, [feature])

  return (
    <>
      {
      true && (
        <div>
          <p onClick={toggleDescription}>
            {feature?.name}
            {feature?.__typename === 'Feature' && `, Level ${feature?.level}`}
            {feature?.__typename &&
              ` | From: ${originFromTypename[feature?.__typename]}`}
          </p>
          {description}
        </div>
      )}
    </>
  );
}

export default Feature;
