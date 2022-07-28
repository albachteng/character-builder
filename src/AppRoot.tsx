import App from "./components/App";
import  {loadQuery, useQueryLoader} from 'react-relay/hooks';
import type {PreloadedQuery} from 'react-relay';
import type { AppCharacterQuery as AppCharacterQueryType } from "./components/__generated__/AppCharacterQuery.graphql";
import type {} from 'react/next';
import { Suspense, useCallback, useContext, useEffect, useTransition } from "react";
import useCharacter from "./hooks/useCharacter";
import { CharacterClass, ZeroToTwenty } from "./types";
import { AppShell, Header, Navbar, Tabs, Text } from '@mantine/core';
import Fallback from "./components/Fallback";
import { Home, Login, Skull, Sword } from 'tabler-icons-react';

const AppCharacterQuery = require('./components/__generated__/AppCharacterQuery.graphql');

const buildSpellVariables = (
  characterClass: CharacterClass,
  characterLevel: ZeroToTwenty,
) => {
  const variables: { [key: string]: any } = {
    AND: { classes: { index: characterClass } },
    OR: [],
  };
  for (let i = 0; i <= characterLevel; i += 1) {
    variables.OR.push({ level: i });
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
    <AppShell
      className=".shell"
      padding="md"
      navbar={<Navbar
        className="nav"
        width={{ base: 100 }}
        height={'100vh'}
        p="xs"
        hidden
        hiddenBreakpoint={"md"}
      >
        <Tabs styles={{
          tabIcon: { color: "white" }
        }} color="teal">
          <Tabs.Tab icon={<Home/>}>Home</Tabs.Tab>
          <Tabs.Tab icon={<Sword/>}>Monsters</Tabs.Tab>
          <Tabs.Tab icon={<Login/>}>Characters</Tabs.Tab>
        </Tabs>
      </Navbar>}
      header={<Header className="header" height={60} p="xs"><h1>Fightr</h1></Header>}>
      <Suspense fallback={<Fallback/>}>
        <App
        isRefetching={isRefetching}
        refetch={refetch}
        queryRef={queryRef}
        state={state}
        dispatch={dispatch}
        startTransition={startTransition}
      />
    </Suspense>
    </AppShell>
  )
}

export default AppRoot;

