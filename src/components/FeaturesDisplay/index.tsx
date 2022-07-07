import Feature from './Feature';
import { useEffect, useState } from 'react';
import useFeaturesFilters from './useFeaturesFilters'
import type { FeaturesDisplayFragment_class$key } from './__generated__/FeaturesDisplayFragment_class.graphql'
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import chooseFrom from '../../utilities/chooseFrom';

type Props = {
  classRef: FeaturesDisplayFragment_class$key
  characterClass: CharacterClass
}

function FeaturesDisplay({classRef, characterClass }: Props): JSX.Element {

  const [ classFeatures, setClassFeatures ] = useState<any>([])

  const { class_levels } = useFragment(
    graphql`fragment FeaturesDisplayFragment_class on Class {
      class_levels (limit: $level, sort: LEVEL_ASC){
        level
        ability_score_bonuses
        features (sort: LEVEL_ASC){
          ...FeatureFragment_feature
          index
          choice {
            choose
            type
          }
          feature_specific {
            subfeature_options {
              choose
              from {
                __typename
                index
                name
                url
              }
              type
            }
            expertise_options {
              choose
              from {
                name
                index
                __typename
              }
              type
            }
          }
          class {
            hit_die
            index
            name
            url
          }
          parent {
            index
            name
            url
          }
          prerequisites {
            level
            type
          }
          # reference
          url
        }
        index
        prof_bonus
        subclass {
          index
          name
        }
      }
    }`, classRef);

  useEffect(() => {
    const class_features = class_levels.map((level) => level.features).flat()
    setClassFeatures(class_features);
  }, [class_levels]);

  const [featureSpecificSelections, setfeatureSpecificSelections] = useState<{[key: string]: any}>({})
  const [featureSpecificOptions, setfeatureSpecificOptions] = useState<{[key: string]: any}>({});

  // setFeatureSpecificOptions
  useEffect(() => {
    classFeatures.forEach((feature) => {
      if (feature?.feature_specific) {
        const selections = chooseFrom(feature?.feature_specific?.subfeature_options)
        // add the indices from the options
        const addToFeatureSpecificOptions = feature?.feature_specific?.subfeature_options?.from
          ?.map((obj) => obj.index) || []
        setfeatureSpecificOptions((prev: {[key: string]: string[]}) => {
          // add the feature index as key and the array of option indices to the featureSpecificOptions
          return {...prev, [String(feature?.index)]: addToFeatureSpecificOptions};
        });
      }}
    )}, [classFeatures]);

  // setfeatureSpecificSelections
  useEffect(() => {
    classFeatures.forEach((feature) => {
      // if there is a feature specific option
      if (feature?.feature_specific) {
        // make the appropriate number of selections
        const selections = chooseFrom(feature?.feature_specific?.subfeature_options)
        // save the selection indices to the selections map
        const selectionIndices = selections.map(selection => selection?.index);
        setfeatureSpecificSelections((prev:{[key: string]: string[]}) => {
          return {...prev, [String(feature?.index)]: selectionIndices}
        })
      }
    }
  )}, [classFeatures]);

  const whiteList: Array<any> = [];
  for (let key in featureSpecificSelections) {
    if (featureSpecificSelections.hasOwnProperty(key)) whiteList.push(...featureSpecificSelections?.[key])
    // TODO not super eficient, we should probably get this some other way
  }

  const classTitle = characterClass[0].toUpperCase() + characterClass.slice(1)

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      <h2>{`Class Features: ${classTitle}`}</h2>
      {classFeatures.map((feature, i, features) => {
        const shouldRender = () => {
          // if it's on the whitelist, we're good
          if (whiteList.includes(feature?.index)) return true
          else {
            for (let key in featureSpecificOptions) {
              if (featureSpecificOptions[key].includes(feature?.index)) return false
            }
            return true
          }
        }
        return <Feature key={features?.[i]?.__id} featureRef={features?.[i]} shouldRender={shouldRender()}/>
      })}
    </div>
  );
}

export default FeaturesDisplay;
