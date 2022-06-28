import { useEffect, useState } from "react";
import useOnClickDescription from "../../hooks/useOnClickDescription";
import {
  BackgroundFeature,
  Feature as FeatureType,
  Trait,
  Choice,
  Maybe,
  FeatureFeature_SpecificSubfeature_OptionsFrom,
  TraitTrait_SpecificSubtrait_OptionsFrom
} from "../../types";
import chooseFrom from "../../utilities/chooseFrom";

type Props = {
  feature: FeatureType | Trait | BackgroundFeature
  show?: boolean
  // featureSpecificSelections: any
};

const originFromTypename: { [k: string]: string } = {
  Feature: "Class Feature",
  Trait: "Racial Trait",
  BackgroundFeature: "Background Feature",
};

function Feature({ feature, show = true}: Props) {

  const { description, toggleDescription } = useOnClickDescription<FeatureType | Trait | BackgroundFeature>(feature);

  return (
    <>
      {
      show && (
        <div>
          <p onClick={toggleDescription}>
            {feature?.name}
            {feature?.__typename === 'Feature' && `, Level ${feature?.level}`}
            {feature?.__typename &&
              ` | From: ${originFromTypename[feature?.__typename]}`}
            {/* {feature?.__typename === 'Feature' && feature?.feature_specific && */}
            {/*   ` - ${featureSpecificSelections[feature?.index as string]?.replaceAll('-', ' ')}`} */}
            {/* {feature?.__typename === 'Trait' && feature?.trait_specific && */}
            {/*   ` - ${featureSpecificSelections[feature?.index as string]?.replaceAll('-', ' ')}`} */}
          </p>
          {description}
        </div>
      )}
    </>
  );
}

export default Feature;
