import { MappingFunc } from '../../types';
import Feature from './Feature';
import { useId } from 'react';
import RenderMap from '../RenderMap';
import useFeaturesFilters from './useFeaturesFilters'
import type { FeaturesDisplayFragment_class$key } from './__generated__/FeaturesDisplayFragment_class.graphql'
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
  classRef: FeaturesDisplayFragment_class$key
  characterClass: CharacterClass
}

function FeaturesDisplay({classRef, characterClass }: Props): JSX.Element {

  const { class_levels } = useFragment(
    graphql`fragment FeaturesDisplayFragment_class on Class {
      class_levels (sort: LEVEL_ASC, limit: $level) {
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

  const classFeatures = class_levels.map((level) => level.features).flat();

  const { featureSpecificOptions, featureSpecificSelections } = useFeaturesFilters(classFeatures, characterClass);

  const whiteList: Array<any> = [];
  for (let key in featureSpecificSelections) {
    if (featureSpecificSelections.hasOwnProperty(key)) whiteList.push(...featureSpecificSelections?.[key])
    // TODO not super eficient, we should probably get this some other way
  }

  // function featuresFilter(features: typeof classFeatures = []) {
  //   return features.filter((feature) => {
  //     // if it's in options but not the whitelist, it should be filtered
  //     for (let key in featureSpecificSelections) {
  //       if (featureSpecificOptions?.[key]?.includes(feature?.index) && !whiteList?.includes(feature?.index)) {
  //         return false;
  //       }
  //     }
  //       return true;
  //     })
  // }
  //
  // function traitFilter(input: typeof traits) {
  //   const traits = input;
  //   return traits?.filter((trait) => {
  //     // if it's in options but not the whitelist, it should be filtered
  //     for (let key in traitSpecificSelections) {
  //       if (featureSpecificOptions?.[key]?.includes(trait?.index) && !whiteList?.includes(trait?.index)) {
  //         return false;
  //       }
  //     }
  //       return true;
  //     })
  // }

  // const featuresMap: MappingFunc<typeof classFeatures> = (feature) => {
  //   return (
  //     <Feature
  //       key={useId()}
  //       featureRef={feature}
  //     />
  //   );
  // };
  //
  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      <h2>Class Features</h2>
      {classFeatures.map((feature) => {
        return <Feature key={useId()} featureRef={feature}/>
      })}
      {/* <RenderMap */}
      {/*   mappingFunc={featuresMap} */}
      {/*   data={/* featuresFilter classFeatures} */}
      {/* /> */}
    </div>
  );
}

export default FeaturesDisplay;
