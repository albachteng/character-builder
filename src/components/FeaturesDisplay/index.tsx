import { useEffect, useState } from 'react';
import useCharacter, { getRandom } from '../../hooks/useCharacter';
import {
  BackgroundFeature,
  Feature as FeatureType,
  Trait,
  Choice,
  Maybe,
  FeatureFeature_SpecificSubfeature_OptionsFrom,
  TraitTrait_SpecificSubtrait_OptionsFrom
} from "../../types";
import { MappingFunc } from '../../types';
import CharacterContext from '../CharacterContext';
import QueryRenderer from '../QueryRenderer';
import Feature from './Feature';
import { makeUniqueId } from '@apollo/client/utilities';
import RenderMap from '../RenderMap';
import chooseFrom from '../../utilities/chooseFrom';

type Props = {
  classFeatures: FeatureType[]
  racialFeatures: Trait[]
  backgroundFeatures: BackgroundFeature
}
function FeaturesDisplay({classFeatures, racialFeatures, backgroundFeatures}: Props): JSX.Element {

  const [featureSpecificSelections, setfeatureSpecificSelections] = useState<object>({})
  const [featureSpecificOptions, setfeatureSpecificOptions] = useState<object>({});

  useEffect(() => {
    classFeatures.forEach((feature: FeatureType) => {
      if (feature?.__typename === 'Feature' && feature?.feature_specific) {
        const selections = chooseFrom(feature
          ?.feature_specific
          ?.subfeature_options as Choice<Maybe<FeatureFeature_SpecificSubfeature_OptionsFrom>>
        )
        const selectionIndices = selections.map(selection => selection?.index);
        const addTofeatureSpecificOptions = feature
          ?.feature_specific
          ?.subfeature_options
          ?.from
          ?.filter((option: any) => option?.index !== selectionIndices)
          ?.map((obj: any) => obj.index) || []
        setfeatureSpecificOptions((prev: {[key: string]: any}) => {
          return {...prev, [String(feature.index)]: addTofeatureSpecificOptions};
        });
        setfeatureSpecificSelections((prev:{[key: string]: any}) => {
          return {...prev, [String(feature.index)]: selectionIndices}
        })
      }
    })
  }, []);

  useEffect(() => {
    racialFeatures.forEach((feature: Trait) => {
      if (feature?.__typename === 'Trait' && feature?.trait_specific) {
        const selections = chooseFrom(feature
          ?.trait_specific
          ?.subtrait_options as Choice<Maybe<TraitTrait_SpecificSubtrait_OptionsFrom>>)
        const selectionIndices = selections.map(selection => selection?.index)
        const addTofeatureSpecificOptions: any[] = feature
          ?.trait_specific
          ?.subtrait_options
          ?.from
          ?.map((obj: any) => obj?.index) || [];
        setfeatureSpecificOptions((prev: {[key: string]: any}) => {
          return {...prev, [String(feature.index)]: addTofeatureSpecificOptions};
        });
        setfeatureSpecificSelections((prev: {[key: string]: any}) => {
          return {...prev, [String(feature.index)]: selectionIndices}
        });
      }
    })
  }, []);

  // const featureSpecificOptions = ['eldritch-invocation', 'pact-of-the', 'draconic-ancestry', 'draconic-ancestor', 'fighting-style', 'hunters-prey']
  const featuresMap: MappingFunc<FeatureType | Trait | BackgroundFeature> = (feature, index) => {
    const featSpec = feature?.feature_specific?.subfeature_options;
    const traitSpec = feature?.trait_specific?.subtrait_options;
    console.log({featSpec, traitSpec})
    let show = true;
    if (feature?.__typename === 'Trait' || feature?.__typename === 'Feature') {
      // if it's in options but not selections, show = false
      for (let key in featureSpecificSelections) {

        if (featureSpecificOptions[key].includes(feature?.index) && !featureSpecificSelections[key].includes(feature?.index)) show = false
        // let trimmedKey = key;
        //
        // if (key.includes('eldritch-invocations')) trimmedKey = 'eldritch-invocation'; // special case, the key doesn't match
        // if (key.includes('pact-')) trimmedKey = 'pact-of-the'; // special case
        // if (feature?.index === 'draconic-ancestry') continue // special case - perhaps a whitelist/featureSpecificOptions
        //
        // if (feature?.index?.includes(trimmedKey) && feature?.index !== key && feature?.index !== featureSpecificSelections[key]) {
        //   show = false;
        //   break;
        // }
      }
    }

    return (
      <Feature
        show={show}
        key={makeUniqueId('feature')}
        feature={feature}
        featureSpecificSelections={featureSpecificSelections}
      />
    );
  };

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      <pre>{JSON.stringify(featureSpecificSelections, null, 2)}</pre>
      <pre>{JSON.stringify(featureSpecificOptions, null, 2)}</pre>
      <h2>Features</h2>
      <RenderMap
        mappingFunc={featuresMap}
        data={[...racialFeatures, backgroundFeatures, ...classFeatures]}
      />
    </div>
  );
}

export default FeaturesDisplay;
