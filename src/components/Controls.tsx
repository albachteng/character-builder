import type { Action, CharacterClass, Race } from '../types';
import { useContext } from 'react';
import CharacterContext from './CharacterContext';
import React from "react";
import { Button } from '@mantine/core'

type Props = {
  refetch: () => void
  characterRace: Race
  characterClass: CharacterClass
  dispatch: React.Dispatch<React.SetStateAction<any>>
}

function Controls({refetch, characterRace, characterClass, dispatch}: Props) {
    return (
      <section className="wide controls">

        <a className="grid-item" target="_" href="https://www.dnd5eapi.co/graphql">GraphQL Playground</a>

        <Button
          className="grid-item"
          variant="default"
          onClick={() =>  {
            dispatch({ type: "newCharacter" })
        }}>
          This one is weak, bring me another!
        </Button>

        <Button
          className="grid-item"
          variant="default"
          onClick={() => dispatch({ type: "levelUp" })}
        >
          Increase this one's power...
        </Button>

        <Button
          className="grid-item"
          variant="default"
          onClick={() => dispatch({ type: "reroll" })}
        >
          These stats are bullshit, roll again!
        </Button>

    </section>
    )
};

export default Controls;
