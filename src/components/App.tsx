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


  const data = usePreloadedQuery<AppCharacterQueryType>(
    graphql`query AppCharacterQuery (
      $class: FilterFindOneClassInput,
      $race: FilterFindOneRaceInput,
      $level: Int,
      $background: FilterFindOneBackgroundInput) {
        class (filter: $class) {
          ...FeaturesDisplayFragment_class
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
          ...FeaturesDisplayFragment_race
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
          ...FeaturesDisplayFragment_background
          ...PersonalityFragment_background
        }
    }`,
    queryRef)

  const myPersonality = useMemo(
    () => <Personality characterBackground={characterBackground} backgroundRef={data?.background!}/>,
    [characterBackground, characterClass]
  );
  return (
    <div>
      <h1>
        Play a fucking {characterRace} {characterClass}, coward!
      </h1>
      <Controls refetch={refetch} characterClass={characterClass} characterRace={characterRace} dispatch={dispatch}/>
      {myPersonality}

      {/* <Suspense fallback={<Fallback />}> */}
      {/*   {data && <HeaderDisplay data={data} characterName="nonsense" />} */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<Fallback />}> */}
      {/*   {data && <AbilityScoresDisplay />} */}
      {/* </Suspense> */}

      <Suspense fallback={<Fallback />}>
        {<FeaturesDisplay
          classRef={data?.class!}
          characterClass={characterClass}
          raceRef={data?.race!}
          characterRace={characterRace}
          backgroundRef={data?.background!}
          characterBackground={characterBackground}
          // classFeatures={data?.class?.class_levels?.map((level: any) => level?.features).flat()}
          // racialFeatures={data?.race?.traits?.flat()}
          // backgroundFeatures={data?.background?.feature}
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
