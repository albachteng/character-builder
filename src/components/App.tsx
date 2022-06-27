import { Suspense, useMemo, lazy } from "react";
import Fallback from "./Fallback";
import "../assets/css/App.css";
import useCharacter from "../hooks/useCharacter";
import { CharacterClass } from "../types";
import CharacterContext from "./CharacterContext";
import { Character } from "../queries/Character";
import { useQuery } from "@apollo/client";

const Controls = lazy(() => import("./Controls"));
const Personality = lazy(() => import("./Personality"));
const AbilityScoresDisplay = lazy(() => import("./AbilityScoresDisplay"));
const FeaturesDisplay = lazy(() => import("./FeaturesDisplay"));
const HeaderDisplay = lazy(() => import("./HeaderDisplay"));
const InventoryDisplay = lazy(() => import("./InventoryDisplay"));
const ItemStore = lazy(() => import("./ItemStore"));
const SkillsDisplay = lazy(() => import("./SkillsDisplay"));
const SpellsDisplay = lazy(() => import("./SpellsDisplay"));

function App() {
  const { state, dispatch } = useCharacter();

  const { characterClass, characterBackground, characterRace, characterLevel } =
    state;

  const variables = {
    class: { index: characterClass },
    race: { index: characterRace },
    level: characterLevel,
    background: { index: characterBackground },
  };

  const { loading, error, data } = useQuery(Character, { variables });

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

  return (
    <CharacterContext.Provider value={state}>
      <Controls dispatch={dispatch} />
      {/* {myPersonality} */}

      {/* <Suspense fallback={<Fallback />}> */}
      {/*   {data && <HeaderDisplay data={data} characterName="nonsense" />} */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<Fallback />}> */}
      {/*   {data && <AbilityScoresDisplay />} */}
      {/* </Suspense> */}
      <Suspense fallback={<Fallback />}>
        {data && <FeaturesDisplay data={data.class.class_levels}/>}
      </Suspense>
      {/* <Suspense fallback={<Fallback />}> */}
      {/*   {data && <ItemStore />}  */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<Fallback />}> */}
      {/*   {data && <InventoryDisplay />}  */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<Fallback />}> */}
      {/*   {data && <SkillsDisplay />} */}
      {/*   {isSpellcaster(characterClass) && <SpellsDisplay />} */}
      {/* </Suspense> */}
    </CharacterContext.Provider>
  );
}

export default App;
