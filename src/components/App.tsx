import type {PreloadedQuery} from 'react-relay';
import { Suspense, useMemo, lazy } from "react";
import Fallback from "./Fallback";
import "../assets/css/App.css";
import { AbilityScores, Background, CharacterClass, Race, ZeroToTwenty } from "../types";
import type { AppCharacterQuery as AppCharacterQueryType } from "./__generated__/AppCharacterQuery.graphql";
import {
  usePreloadedQuery,
} from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro'

const BackgroundFeaturesDisplay = lazy(() => import("./FeaturesDisplay/BackgroundFeaturesDisplay"));
const TraitsDisplay = lazy(() => import("./FeaturesDisplay/TraitsDisplay"));
const Controls = lazy(() => import("./Controls"));
const Personality = lazy(() => import("./Personality"));
const AbilityScoresDisplay = lazy(() => import("./AbilityScoresDisplay"));
const FeaturesDisplay = lazy(() => import("./FeaturesDisplay"));
const HeaderDisplay = lazy(() => import("./HeaderDisplay"));
const InventoryDisplay = lazy(() => import("./InventoryDisplay"));
const ItemStore = lazy(() => import("./ItemStore"));
const SkillsDisplay = lazy(() => import("./SkillsDisplay"));
const SpellsDisplay = lazy(() => import("./SpellsDisplay"));
const HitPoints = lazy(() => import("./HitPoints"));

type Props = {
  isRefetching: boolean
  dispatch: React.Dispatch<React.SetStateAction<any>>
  refetch: () => void
  queryRef: PreloadedQuery<AppCharacterQueryType, Record<string, unknown>>
  state: {
    characterRace: Race,
    characterClass: CharacterClass,
    characterLevel: ZeroToTwenty,
    characterStats: AbilityScores,
    characterBackground: Background,
  }
  startTransition: () => void
}

function App({queryRef, refetch, isRefetching, state, dispatch, startTransition}: Props) {

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
      $background: FilterFindOneBackgroundInput,
      $spells:  FilterFindManySpellInput) {
        ...AbilityScoresDisplayFragment_query
        class (filter: $class) {
          ...FeaturesDisplayFragment_class
          ...ClassEquipmentFragment_class
          ...SkillsDisplayFragment_class
          ...ItemStoreFragment_class
          ...SpellSlotsFragment_class
          spellcasting {
            ...SpellModFragment_spellcasting
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
          ...BackgroundEquipmentFragment_background
          ...BackgroundFeaturesDisplayFragment_background
          ...PersonalityFragment_background
          language_options {
            choose
            from {
              index
              name
            }
            type
          }
        }
        ...SpellsDisplayFragment_query
      }`, queryRef);

  const MemoizedPersonality = useMemo(
    () => <Personality characterBackground={characterBackground} backgroundRef={data?.background!}/>,
    [characterBackground, characterClass]
  );

  return (
    <main id="main">

      <section className="full-width">
        <h1>
          Play a fucking {characterRace} {characterClass}, coward!
        </h1>
      </section>

      <Suspense>
        <Controls
          startTransition={startTransition}
          isRefetching={isRefetching}
          refetch={refetch}
          dispatch={dispatch}
        />
      </Suspense>

      <Suspense fallback={<Fallback />}>
        <AbilityScoresDisplay characterStats={characterStats} queryRef={data!}/>
      </Suspense>

      <Suspense fallback={<Fallback />}>
        <HitPoints characterClass={characterClass} characterStats={characterStats} characterLevel={characterLevel}/>
      </Suspense>

      <Suspense fallback={<Fallback />}>
        <HeaderDisplay
          characterClass={characterClass}
          characterBackground={characterBackground}
          characterRace={characterRace}
          characterLevel={characterLevel}
          characterName="Nonsense" />
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

      <Suspense fallback={<Fallback />}>
        {data && <SkillsDisplay
          characterLevel={characterLevel}
          characterStats={characterStats}
          raceRef={data?.race!}
          backgroundRef={data?.background!}
          classRef={data?.class!}
        />}
      </Suspense>

      {MemoizedPersonality}

      <Suspense>
        {isSpellcaster(characterClass) &&
          <SpellsDisplay
            characterClass={characterClass}
            characterLevel={characterLevel}
            characterStats={characterStats}
            queryRef={data!}
            spellcastingRef={data?.class?.spellcasting!}
            spellslotsRef={data?.class?.class_levels?.[characterLevel]?.spellcasting!}
            classRef={data?.class!}
        />}
      </Suspense>


    </main>
  );
}

export default App;
