import useOnClickDescription from "../../hooks/useOnClickDescription";
import { BackgroundFeature, Feature as FeatureType, Trait } from "../../types";

type Props = {
  feature: FeatureType | Trait | BackgroundFeature;
  selectionSearchTerm?: string;
  selectionIndex?: string;
};

const originFromTypename: { [k: string]: string } = {
  Feature: "Class Feature",
  Trait: "Racial Trait",
  BackgroundFeature: "Background Feature",
};

function Feature({ feature, selectionSearchTerm, selectionIndex }: Props) {

  const { description, toggleDescription } =
    useOnClickDescription<FeatureType | Trait | BackgroundFeature>(feature);

  // // matchesSelectionSearch tells us if this is one of the terms we are looking to potentially filter
  // const matchesSelectionSearch =
  //   selectionSearchTerm && feature?.index?.includes(selectionSearchTerm);
  // // isSelection tells us if this is the selection we've made - we want to render this and not the other matches
  // const isSelection = selectionIndex && selectionIndex === feature?.index;
  // // a more concise way to decide
  // const shouldRender = matchesSelectionSearch ? isSelection : true;

  return (
    <>
      {
      true && (
        <div>
          <p onClick={toggleDescription}>
            {feature?.name}
            {feature?.level && `, Level ${feature?.level}`}
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
