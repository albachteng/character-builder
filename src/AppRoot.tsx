import App from "./components/App";
import  {loadQuery, useQueryLoader} from 'react-relay/hooks';
import type {PreloadedQuery} from 'react-relay';
import type { AppCharacterQuery as AppCharacterQueryType } from "./components/__generated__/AppCharacterQuery.graphql";
import type {} from 'react/next';
import { Suspense, useCallback, useContext, useEffect, useTransition } from "react";
import useCharacter from "./hooks/useCharacter";
import CharacterContext from "./components/CharacterContext";
import { CharacterClass, ZeroToTwenty } from "./types";

const AppCharacterQuery = require('./components/__generated__/AppCharacterQuery.graphql');

const buildSpellVariables = (
  characterClass: CharacterClass,
  characterLevel: ZeroToTwenty,
) => {
  const variables: { [key: string]: any } = {
    filter: {
      AND: { classes: { index: characterClass } },
      OR: [],
    },
  };
  for (let i = 0; i <= characterLevel; i += 1) {
    variables.filter.OR.push({ level: i });
  }
  return variables;
};

function AppRoot() {

  const [isRefetching, startTransition] = useTransition();
  const { state, dispatch} = useCharacter();
  const [queryRef, loadQuery] = useQueryLoader<AppCharacterQueryType>(AppCharacterQuery, /* initialRef */)

  const refetch = useCallback(() => {
    const spellVariables = buildSpellVariables(state.characterClass, state.characterLevel);
    startTransition(() => {
      loadQuery({
        class: { index: state.characterClass},
        race: { index: state.characterRace },
        level: state.characterLevel,
        background: { index: state.characterBackground},
        spells: spellVariables
      })
    })
  }, [state])

  useEffect(() => {
    refetch()
  }, [state])

  if (queryRef == null) {
    return (
      <button onClick={() => loadQuery({
        class: { index: state.characterClass},
        race: { index: state.characterRace },
        level: state.characterLevel,
        background: { index: state.characterBackground},
      })}>
        Click to start!
      </button>
    )
  }

  return (
    <Suspense fallback={"Loading in QueryRoot"}>
      <App
        isRefetching={isRefetching}
        refetch={refetch}
        queryRef={queryRef}
        state={state}
        dispatch={dispatch}
      />
    </Suspense>
  )
}

export default AppRoot;

