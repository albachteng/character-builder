import App from "./components/App";
import  {loadQuery, useQueryLoader} from 'react-relay/hooks';
import type {PreloadedQuery} from 'react-relay';
import type { AppCharacterQuery as AppCharacterQueryType } from "./components/__generated__/AppCharacterQuery.graphql";
import type {} from 'react/next';
import { Suspense, useCallback, useContext, useTransition } from "react";
import useCharacter from "./hooks/useCharacter";
import CharacterContext from "./components/CharacterContext";

const AppCharacterQuery = require('./components/__generated__/AppCharacterQuery.graphql');

function AppRoot() {

  const [isRefetching, startTransition] = useTransition();
  const { state, dispatch} = useCharacter();
  const { characterClass, characterLevel, characterRace, characterBackground } = state;
  const variables = {
    class: { index: characterClass},
    race: { index: characterRace },
    level: characterLevel,
    background: { index: characterBackground},
  }
  const [queryRef, loadQuery] = useQueryLoader<AppCharacterQueryType>(AppCharacterQuery, /* initialRef */)

  const refetch = useCallback(() => {
    startTransition(() => {
      loadQuery(variables)
      dispatch({type: 'newCharacter'})
    })
  }, [characterClass, characterRace, characterBackground, characterLevel])

  if (queryRef == null) {
    return (
      <button onClick={() => loadQuery(variables)}>
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

