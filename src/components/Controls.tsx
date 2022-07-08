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

const actions = [
  {label: "GraphQL", href: "https://www.dnd5eapi.co/graphql" , onClick: () => {}},
  {label: "This one is weak, bring me another", onClick: () => dispatch({type: "newCharacter"})},
  {label: "Increase this one's power", onClick: () => dispatch({type: "levelUp"})},
  {label: "These stats are bullshit, roll again", onClick: () => dispatch({type: "reroll"})},
];

function Controls({refetch, characterRace, characterClass, dispatch}: Props) {
    return (
      <section className="wide controls">

        {actions.map(({label, onClick, href}) => {
        return <Button
          loading={false}
          component={href ? "a" : "button"}
          href={href || null}
          target="_"
          disabled={false}
          className="grid-item button"
          variant="default"
          onClick={onClick}>{label}
        </Button> })}

    </section>
    )
};

export default Controls;
