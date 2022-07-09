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
  startTransition: () => void
}


function Controls({isRefetching, refetch, dispatch, startTransition}: Props) {

const actions = [
  {label: "GraphQL", href: "https://www.dnd5eapi.co/graphql" , icon: <Database />},
  {label: "It is weak, bring another", onClick: () => startTransition(() => dispatch({type: "newCharacter"})), icon: <Swords />},
  {label: "Increase its power", onClick: () => startTransition(() => dispatch({type: "levelUp"})), icon: <Bolt />},
  {label: "Bullshit! Roll again", onClick: () => startTransition(() => dispatch({type: "reroll"})), icon: <Dice />},
];

    return (
      <section className="full-width controls">

        {actions.map(({label, onClick, href, icon}) => {
        return href ?
          <Button
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
          </Button> :
          <Button
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
