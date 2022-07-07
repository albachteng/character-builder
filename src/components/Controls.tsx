import type { Action, CharacterClass, Race } from '../types';
import { useContext } from 'react';
import CharacterContext from './CharacterContext';
import React from "react";

type Props = {
  refetch: () => void
  characterRace: Race
  characterClass: CharacterClass
  dispatch: React.Dispatch<React.SetStateAction<any>>
}

function Controls({refetch, characterRace, characterClass, dispatch}: Props) {
    return (
      <section>
        <a target="_" href="https://www.dnd5eapi.co/graphql">
          GraphQL Playground
        </a>
        <button onClick={() =>  {
          dispatch({ type: "newCharacter" })
          // refetch()
        }}> This one is weak, bring me another </button>
        <button onClick={() =>  refetch() }>REFETCH</button>
        <button onClick={() => dispatch({ type: "levelUp" })}>
          Increase this one's power...
        </button>
        <button onClick={() => dispatch({ type: "reroll" })}>
          These stats are bullshit, roll again!
        </button>
    </section>
    )
};

export default Controls;
