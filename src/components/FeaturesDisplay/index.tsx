import { useEffect, useState } from 'react';
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
import useFeaturesFilters from './useFeaturesFilters'
import type { FeaturesDisplayFragment_class$key } from './__generated__/FeaturesDisplayFragment_class.graphql'
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
  classRef: FeaturesDisplayFragment_class$key
  // classFeatures: FeatureType[]
  // racialFeatures: Trait[]
  // backgroundFeatures: BackgroundFeature
}

function FeaturesDisplay({classRef}: Props): JSX.Element {

  const data = useFragment(
    graphql`fragment FeaturesDisplayFragment_class on Class {
      class_levels (sort: LEVEL_ASC, limit: $level) {
        level
        ability_score_bonuses
        class {
          index
          name
        }
        features (sort: LEVEL_ASC){
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
          desc
          parent {
            index
            name
            url
          }
          index
          level
          name
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
        spellcasting {
          cantrips_known
          spell_slots_level_1
          spell_slots_level_2
          spell_slots_level_3
          spell_slots_level_4
          spell_slots_level_5
          spell_slots_level_6
          spell_slots_level_7
          spell_slots_level_8
          spell_slots_level_9
          spells_known
        }
        subclass {
          index
          name
        }
      }
      hit_die
      index
      name
      proficiencies {
        index
        name
        # reference {
        #   index
        #   name
        #   type
        #   url
        # }
        type
        url
      }
      proficiency_choices {
        choose
        from {
          index
          name
        }
        type
      }
      saving_throws {
        index
        name
      }
      spellcasting {
        info {
          desc
          name
        }
        level
        spellcasting_ability {
          index
          name
        }
      }
      starting_equipment {
        equipment {
          index
          name
        }
        quantity
      }
      starting_equipment_options {
        choose
        from {
          quantity
        }
        type
      }
      subclasses {
        index
        name
      }
    }`, classRef);
  // const { featureSpecificOptions, featureSpecificSelections } = useFeaturesFilters(classFeatures, racialFeatures);
  //
  // const whiteList: Array<Maybe<string> | undefined> = [];
  // for (let key in featureSpecificSelections) {
  //   if (featureSpecificSelections.hasOwnProperty(key)) whiteList.push(...featureSpecificSelections?.[key] as string) // TODO not super eficient, we should probably get this some other way
  // }
  //
  // function featuresFilter(features: Array<FeatureType | Trait>) {
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
  //
  // const featuresMap: MappingFunc<FeatureType | Trait | BackgroundFeature> = (feature, index) => {
  //   return (
  //     <Feature
  //       // show={show}
  //       key={makeUniqueId('feature')}
  //       feature={feature}
  //       // featureSpecificSelections={featureSpecificSelections}
  //     />
  //   );
  // };
  //
  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      {/* <pre>{JSON.stringify(featureSpecificSelections, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(featureSpecificOptions, null, 2)}</pre> */}
      <h2>Features</h2>
      <pre>{JSON.stringify(data?.class_levels, null, 2)}</pre>
      {/* <RenderMap */}
      {/*   mappingFunc={featuresMap} */}
      {/*   data={[backgroundFeatures, ...featuresFilter([...racialFeatures, ...classFeatures])]} */}
      {/* /> */}
    </div>
  );
}

export default FeaturesDisplay;
