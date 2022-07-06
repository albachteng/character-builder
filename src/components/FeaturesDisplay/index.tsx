import Feature from './Feature';
import { useEffect, useState } from 'react';
import useFeaturesFilters from './useFeaturesFilters'
import type { FeaturesDisplayFragment_class$key } from './__generated__/FeaturesDisplayFragment_class.graphql'
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
  classRef: FeaturesDisplayFragment_class$key
  characterClass: CharacterClass
}

function FeaturesDisplay({classRef, characterClass }: Props): JSX.Element {

  const [ classFeatures, setClassFeatures ] = useState<any>([])

  const { class_levels } = useFragment(
    graphql`fragment FeaturesDisplayFragment_class on Class {
      class_levels (limit: 1, skip: $level,  sort: LEVEL_ASC){
        level
        ability_score_bonuses
        # class {
        #   index
        #   name
        # }
        features (sort: LEVEL_ASC){
          ...FeatureFragment_feature
          choice {
            choose
            type
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

  const { featureSpecificOptions, featureSpecificSelections } = useFeaturesFilters(classFeatures, characterClass);

  const whiteList: Array<any> = [];
  for (let key in featureSpecificSelections) {
    if (featureSpecificSelections.hasOwnProperty(key)) whiteList.push(...featureSpecificSelections?.[key])
    // TODO not super eficient, we should probably get this some other way
  }

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      <h2>Class Features</h2>
      {classFeatures.map((_, i, features) => {
        return <Feature key={features?.[i]?.__id} featureRef={features?.[i]}/>
      })}
    </div>
  );
}

export default FeaturesDisplay;
