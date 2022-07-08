import type { Action, CharacterClass, Race } from '../types';
import { useContext } from 'react';
import CharacterContext from './CharacterContext';
import React from "react";
import { Button } from '@mantine/core'
import { Database, Swords, Bolt, Dice } from 'tabler-icons-react';

type Props = {
  isRefetching: boolean
  refetch: () => void
  dispatch: React.Dispatch<React.SetStateAction<any>>
}


function Controls({isRefetching, refetch, dispatch}: Props) {

const actions = [
  {label: "GraphQL", href: "https://www.dnd5eapi.co/graphql" , onClick: () => {}, icon: <Database />},
  {label: "This one is weak, bring me another", onClick: () => dispatch({type: "newCharacter"}), icon: <Swords />},
  {label: "Increase this one's power", onClick: () => dispatch({type: "levelUp"}), icon: <Bolt />},
  {label: "These stats are bullshit, roll again", onClick: () => dispatch({type: "reroll"}), icon: <Dice />},
];

    return (
      <section className="full-width controls">

        {actions.map(({label, onClick, href, icon}) => {
        return href ? <Button
          loading={isRefetching}
          disabled={isRefetching}
          variant="default"
          className="grid-item button"
          leftIcon={icon}
          component={href ? "a" : "button"}
          href={href}
          target="_"
        >
          {label}
        </Button> : <Button
          loading={isRefetching}
          disabled={isRefetching}
          variant="default"
          className="grid-item button"
          leftIcon={icon}
          onClick={onClick}
          >
          {label}
          </Button>})}

    </section>
    )
};

export default Controls;
