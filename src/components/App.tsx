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

const SpellcastingDisplay = lazy(() => import ("./SpellcastingDisplay"));
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
          ...SpellcastingDisplayFragment_class
          spellcasting {
            ...SpellModFragment_spellcasting
          }
        }
        race (filter: $race) {
          ...RaceDetailsFragment_race
          ...SkillsDisplayFragment_race
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
        }
        ...SpellsDisplayFragment_query
        ruleSections (filter: {OR: [
          {index: "ability-scores-and-modifiers"},
          {index: "resting"},
          {index: "damage-and-healing"},
          {index: "casting-a-spell"},
          {index: "what-is-a-spell"},
          {index: "using-each-ability"},
          {index: "movement"},
          {index: "saving-throws"},
          {index: "ability-checks"},
          {index: "proficiency-bonus"},
          {index: "actions-in-combat"},
          {index: "making-an-attack"}
        ]}
        ){
          index
          ...HitPointsRestingFragment_ruleSections
          ...HitPointsDamageFragment_ruleSections
          ...AbilityScoresDisplayFragment_ruleSections
          ...SpellsDisplaySpellFragment_ruleSections
          ...SpellsDisplaySpellcastingFragment_ruleSections
          ...ProficiencyBonusFragment_ruleSections
          ...SkillsDisplayFragment_ruleSections
        }
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
        <AbilityScoresDisplay
          characterStats={characterStats}
          abilityScoresRuleRef={data?.ruleSections?.find((section) => section.index ==='ability-scores-and-modifiers')!}
          queryRef={data!}
        />
      </Suspense>

      <Suspense fallback={<Fallback />}>
        <HitPoints
          characterClass={characterClass}
          characterStats={characterStats}
          characterLevel={characterLevel}
          restingRulesRef={data?.ruleSections?.find((section) => section.index === 'resting')!}
          damageRulesRef={data?.ruleSections?.find((section) => section.index === 'damage-and-healing')!}
          proficiencyRulesRef={data?.ruleSections?.find((section) => section?.index === 'proficiency-bonus')!}
        />
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
        >
          {MemoizedPersonality}
        </BackgroundFeaturesDisplay>
      </Suspense>

      <Suspense fallback={<Fallback />}>
        <SkillsDisplay
          characterLevel={characterLevel}
          characterStats={characterStats}
          raceRef={data?.race!}
          backgroundRef={data?.background!}
          classRef={data?.class!}
          skillsRuleRef={data?.ruleSections?.find((section) => section?.index === 'ability-checks')}
        />
      </Suspense>

      <Suspense>
        {isSpellcaster(characterClass) &&
        <SpellcastingDisplay
            characterClass={characterClass}
            characterLevel={characterLevel}
            characterStats={characterStats}
            classRef={data?.class!}
        />}
      </Suspense>

      <Suspense>
        {isSpellcaster(characterClass) &&
          <SpellsDisplay
            queryRef={data!}
            spellRulesRef={data?.ruleSections?.find((section) => section.index === 'what-is-a-spell')}
            spellcastingRulesRef={data?.ruleSections?.find((section) => section.index === 'casting-a-spell')}
        />}
      </Suspense>

    </main>
  );
}

export default App;
