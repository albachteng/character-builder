import type { Action } from '../types';
import { useContext } from 'react';
import CharacterContext from './CharacterContext';
import React from "react";

type Props = {
    dispatch: React.Dispatch<Action<never>>
}

function Controls({dispatch}: Props) {

  const { characterClass, characterRace } = useContext(CharacterContext);
    return (
      <div id="App">
        <a target="_" href="https://www.dnd5eapi.co/graphql">
          GraphQL Playground
        </a>
        <a
          target="_"
          href="https://studio.apollographql.com/sandbox/explorer/?_gl=1*1m2cvlk*_ga*MjA5MTc2OTg3OC4xNjM0MTM3MDc2*_ga_0BGG5V2W2K*MTYzNDIyMzUyNS4yLjEuMTYzNDIyNTEwOC4w"
        >
          Apollo Explorer
        </a>
        <button onClick={() => dispatch({ type: "newCharacter" })}>
          This one is weak, bring me another
        </button>
        <button onClick={() => dispatch({ type: "levelUp" })}>
          Increase this one's power...
        </button>
        <button onClick={() => dispatch({ type: "reroll" })}>
          These stats are bullshit, roll again!
        </button>
        <h1>
          Play a fucking {characterRace} {characterClass}, coward!
        </h1>
    </div>
    )
};

export default Controls;