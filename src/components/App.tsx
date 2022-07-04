import type {PreloadedQuery} from 'react-relay';
import { Suspense, useMemo, lazy, useContext } from "react";
import Fallback from "./Fallback";
import "../assets/css/App.css";
import { AbilityScores, Background, CharacterClass, Level, Race, ZeroToTwenty } from "../types";
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
import BackgroundFeaturesDisplay from './FeaturesDisplay/BackgroundFeaturesDisplay';

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
    characterStats: AbilityScores,
    characterBackground: Background,
  }
}

function App({queryRef, refetch, isRefetching, state, dispatch}: Props) {

  const { characterClass, characterRace, characterBackground, characterLevel, characterStats } = state;
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
          ...InventoryDisplayFragment_class
          ...SkillsDisplayFragment_class
          ...ItemStoreFragment_class
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
          ...SkillsDisplayFragment_race
          subraces {
            index
            name
          }
          ...TraitsDisplayFragment_race
        }
        background(filter: $background) {
          index
          name
          ...SkillsDisplayFragment_background
          ...ItemStoreFragment_background
          language_options {
            choose
            from {
              index
              name
            }
            type
          }
          ...InventoryDisplayFragment_background
          ...BackgroundFeaturesDisplayFragment_background
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

      <Suspense fallback={<Fallback />}>
        {data && <HeaderDisplay
          characterStats={characterStats}
          characterClass={characterClass}
          characterBackground={characterBackground}
          characterRace={characterRace}
          characterLevel={characterLevel}
          characterName="nonsense" />}
      </Suspense>

      <Suspense fallback={<Fallback />}>
        <AbilityScoresDisplay characterStats={characterStats} />
      </Suspense>

      <Suspense fallback={<Fallback />}>
        <FeaturesDisplay
          classRef={data?.class!}
          characterClass={characterClass}
        />
        <TraitsDisplay
          raceRef={data?.race!}
          characterRace={characterRace}
        />
        <BackgroundFeaturesDisplay
          backgroundRef={data?.background!}
          characterBackground={characterBackground}
        />
      </Suspense>
      {/* <Suspense fallback={<Fallback />}> */}
      {/*   {data && <ItemStore />} */}
      {/* </Suspense> */}
      <Suspense fallback={<Fallback />}>
        {data && <InventoryDisplay
          characterClass={characterClass}
          characterBackground={characterBackground}
          backgroundRef={data?.background!}
          classRef={data?.class!}
        />}
      </Suspense>
      <Suspense fallback={<Fallback />}>
        {data && <SkillsDisplay
          characterLevel={characterLevel}
          characterStats={characterStats}
          characterClass={characterClass}
          characterRace={characterRace}
          characterBackground={characterBackground}
          raceRef={data?.race!}
          backgroundRef={data?.background!}
          classRef={data?.class!}
        />}
      {/*   {isSpellcaster(characterClass) && <SpellsDisplay />} */}
      </Suspense>
  </div>
  );
}

export default App;
