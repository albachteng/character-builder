import type {PreloadedQuery} from 'react-relay';
import { Suspense, useMemo, lazy, useContext } from "react";
import Fallback from "./Fallback";
import "../assets/css/App.css";
import { Background, CharacterClass, Level, Race, ZeroToTwenty } from "../types";
import type { AppCharacterQuery as AppCharacterQueryType, AppCharacterQuery$variables } from "./__generated__/AppCharacterQuery.graphql";
import { useQuery } from "@apollo/client";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from '../RelayEnvironment';
import graphql from 'babel-plugin-relay/macro'
import { OperationType } from 'relay-runtime';
import CharacterContext from './CharacterContext';

const Controls = lazy(() => import("./Controls"));
const Personality = lazy(() => import("./Personality"));
const AbilityScoresDisplay = lazy(() => import("./AbilityScoresDisplay"));
const FeaturesDisplay = lazy(() => import("./FeaturesDisplay"));
const HeaderDisplay = lazy(() => import("./HeaderDisplay"));
const InventoryDisplay = lazy(() => import("./InventoryDisplay"));
const ItemStore = lazy(() => import("./ItemStore"));
const SkillsDisplay = lazy(() => import("./SkillsDisplay"));
const SpellsDisplay = lazy(() => import("./SpellsDisplay"));

type Props = {
  isRefetching: boolean
  dispatch: React.Dispatch<React.SetStateAction<any>>
  refetch: () => void
  queryRef: PreloadedQuery<AppCharacterQueryType, Record<string, unknown>>
  // loadQuery: (variables: AppCharacterQuery$variables, options?: any) => void
  state: {
    characterRace: Race,
    characterClass: CharacterClass,
    characterLevel: ZeroToTwenty,
    characterBackground: Background,
  }
}

function App({queryRef, refetch, isRefetching, state, dispatch}: Props) {

  const { characterClass, characterRace, characterBackground, characterLevel } = state;
  // Two fighter and rogue archetypes DO get spellcasting - Eldritch Knight and Arcane Trickster
  const isSpellcaster = (characterClass: CharacterClass) => {
    const whiteList = [
      "bard",
      "cleric",
      "druid",
      "paladin",
      "ranger",
      "sorcerer",
      "warlock",
      "wizard" /* 'fighter', 'rogue' */,
    ];
    return whiteList.includes(characterClass);
  };

  const myPersonality = useMemo(
    () => <Personality />,
    [characterBackground, characterClass]
  );

  const data = usePreloadedQuery<AppCharacterQueryType>(
    graphql`query AppCharacterQuery (
      $class: FilterFindOneClassInput,
      $race: FilterFindOneRaceInput,
      $level: Int,
      $background: FilterFindOneBackgroundInput) {
        class (filter: $class) {
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
              # references
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
        }
        race (filter: $race) {
          ability_bonus_options {
            choose
            from {
              bonus
            }
            type
          }
          ability_bonuses {
            ability_score {
              index
              name
            }
            bonus
          }
          age
          alignment
          index
          language_desc
          language_options {
            choose
            from {
              index
              name
            }
            type
          }
          languages {
            index
            name
          }
          name
          size
          size_description
          speed
          starting_proficiencies {
            index
            name
          }
          starting_proficiency_options {
            choose
            from {
              name
              index
              __typename
            }
            type
          }
          subraces {
            index
            name
          }
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
        }
        background(filter: $background) {
          index
          name
          starting_proficiencies {
            index
            name
            # references {
            #   index
            #   name
            #   type
            # }
            type
          }
          language_options {
            choose
            from {
              index
              name
            }
            type
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
              equipment {
                name
                index
                __typename
            }
            }
            type
          }
          feature {
            name
            desc
          }
          personality_traits {
            choose
            from
            type
          }
          ideals {
            choose
            from {
              desc
              alignments {
                index
                name
              }
            }
            type
          }
          bonds {
            choose
            from
            type
          }
          flaws {
            choose
            from
            type
          }
        }
    }`,
    queryRef)

  return (
    <div>
        <h1>
          Play a fucking {characterRace} {characterClass}, coward!
        </h1>
      <Controls refetch={refetch} characterClass={characterClass} characterRace={characterRace} dispatch={dispatch}/>
      {/* {myPersonality} */}

      {/* <Suspense fallback={<Fallback />}> */}
      {/*   {data && <HeaderDisplay data={data} characterName="nonsense" />} */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<Fallback />}> */}
      {/*   {data && <AbilityScoresDisplay />} */}
      {/* </Suspense> */}
      <Suspense fallback={<Fallback />}>
        {<FeaturesDisplay
          classFeatures={data?.class?.class_levels?.map((level: any) => level?.features).flat()}
          racialFeatures={data?.race?.traits?.flat()}
          backgroundFeatures={data?.background?.feature}
          />}
      </Suspense>
      {/* <Suspense fallback={<Fallback />}> */}
      {/*   {data && <ItemStore />} */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<Fallback />}> */}
      {/*   {data && <InventoryDisplay />} */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<Fallback />}> */}
      {/*   {data && <SkillsDisplay />} */}
      {/*   {isSpellcaster(characterClass) && <SpellsDisplay />} */}
      {/* </Suspense> */}
  </div>
  );
}

export default App;
