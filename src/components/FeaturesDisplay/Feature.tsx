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
  feature: FeatureType | Trait | BackgroundFeature;
  hide: boolean;
};

const originFromTypename: { [k: string]: string } = {
  Feature: "Class Feature",
  Trait: "Racial Trait",
  BackgroundFeature: "Background Feature",
};

function Feature({ feature, hide }: Props) {

  const { description, toggleDescription } = useOnClickDescription<FeatureType | Trait | BackgroundFeature>(feature);

  return (
    <>
      {
      !hide && (
        <div>
          <p onClick={toggleDescription}>
            {feature?.name}
            {feature?.__typename === 'Feature' && `, Level ${feature?.level}`}
            {feature?.__typename &&
              ` | From: ${originFromTypename[feature?.__typename]}`}
            {/* {feature?.__typename === 'Trait' && feature?.trait_specific && `: ${featureSpecificChoice}`} */}
          </p>
          {description}
        </div>
      )}
    </>
  );
}

export default Feature;
