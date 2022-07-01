import { useEffect, useState } from 'react';
import {
  BackgroundFeature,
  Feature as FeatureType,
  Trait,
  Choice,
  Maybe,
  FeatureFeature_SpecificSubfeature_OptionsFrom,
  TraitTrait_SpecificSubtrait_OptionsFrom,
  CharacterClass
} from "../../types";
import { MappingFunc } from '../../types';
import CharacterContext from '../CharacterContext';
import QueryRenderer from '../QueryRenderer';
import Feature from './Feature';
import { makeUniqueId } from '@apollo/client/utilities';
import RenderMap from '../RenderMap';
import useFeaturesFilters from './useFeaturesFilters'
import useTraitsFilters from './useTraitsFilters';
import type { FeaturesDisplayFragment_class$key } from './__generated__/FeaturesDisplayFragment_class.graphql'
import type { FeaturesDisplayFragment_race$key } from './__generated__/FeaturesDisplayFragment_race.graphql'
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
  classRef: FeaturesDisplayFragment_class$key
  raceRef: FeaturesDisplayFragment_race$key
  characterClass: CharacterClass
  characterRace: Race
  // classFeatures: FeatureType[]
  // racialFeatures: Trait[]
  // backgroundFeatures: BackgroundFeature
}

function FeaturesDisplay({classRef, raceRef, characterClass, characterRace}: Props): JSX.Element {

  const {class_levels} = useFragment(
    graphql`fragment FeaturesDisplayFragment_class on Class {
      class_levels (sort: LEVEL_ASC, limit: $level) {
        level
        ability_score_bonuses
        # class {
        #   index
        #   name
        # }
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
        subclass {
          index
          name
        }
      }
    }`, classRef);

  console.log({raceRef})
  const traits = useFragment(
    graphql`fragment FeaturesDisplayFragment_race on Race {
      traits {
        desc
        index
        name
        proficiencies {
          index
          name
          type
        }
        proficiency_choices {
          choose
          from {
            name
            index
            __typename
          }
          type
        }
        parent {
          index
          name
        }
        trait_specific {
          subtrait_options {
            choose
            from {
              __typename
              index
              name
              url
            }
            type
          }
          spell_options {
            choose
            from {
              name
              index
              __typename
            }
            type
          }
          damage_type {
            index
            name
          }
          breath_weapon {
            name
            desc
            usage {
              type
              times
            }
            dc {
              dc_type {
                index
                name
              }
              success_type
            }
            damage {
              damage_at_character_level
            }
          }
        }
      }
  }`, raceRef)

  const classFeatures = class_levels.map((level) => level.features).flat();

  const { featureSpecificOptions, featureSpecificSelections } = useFeaturesFilters(classFeatures, characterClass);
  const { traitSpecificOptions, traitSpecificSelections } = useTraitsFilters(traits, characterRace)
  console.log({traits})
  console.log({featureSpecificOptions, featureSpecificSelections})

  const whiteList: Array<any> = [];
  for (let key in featureSpecificSelections) {
    if (featureSpecificSelections.hasOwnProperty(key)) whiteList.push(...featureSpecificSelections?.[key])
    // TODO not super eficient, we should probably get this some other way
  }
  for (let key in traitSpecificSelections) {
    if (traitSpecificSelections.hasOwnProperty(key)) whiteList.push(...traitSpecificSelections?.[key])
    // TODO not super eficient, we should probably get this some other way
  }

  console.log({featureSpecificOptions, traitSpecificOptions, whiteList})

  function featuresFilter(features: typeof classFeatures) {
    return features.filter((feature) => {
      // if it's in options but not the whitelist, it should be filtered
      for (let key in featureSpecificSelections) {
        if (featureSpecificOptions?.[key]?.includes(feature?.index) && !whiteList?.includes(feature?.index)) {
          return false;
        }
      }
        return true;
      })
  }

  function traitFilter(traits: typeof traits) {
    return traits.filter((trait) => {
      // if it's in options but not the whitelist, it should be filtered
      for (let key in traitSpecificSelections) {
        if (featureSpecificOptions?.[key]?.includes(trait?.index) && !whiteList?.includes(trait?.index)) {
          return false;
        }
      }
        return true;
      })
  }

  const featuresMap: MappingFunc<typeof traits | typeof classFeatures> = (feature, index) => {
    return (
      <Feature
        // show={show}
        key={makeUniqueId('feature')}
        feature={feature}
        // featureSpecificSelections={featureSpecificSelections}
      />
    );
  };

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      {/* <pre>{JSON.stringify(featureSpecificSelections, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(featureSpecificOptions, null, 2)}</pre> */}
      <h2>Features</h2>
      {/* <pre>{JSON.stringify(class_levels, null, 2)}</pre> */}
      <RenderMap
        mappingFunc={featuresMap}
        data={featuresFilter(classFeatures)}
      />
      <RenderMap
        mappingFunc={featuresMap}
        data={traitFilter(traits)}
      />
    </div>
  );
}

export default FeaturesDisplay;
