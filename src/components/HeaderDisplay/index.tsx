/*
ultimately responsible for displaying character name, character class, race, level, ?alignment, ?experience, ?background
*/

import {
  AbilityScores, CharacterClass, Race, ZeroToTwenty,
} from '../../types';
import { Background } from '../../types/Background';
import CharacterContext from '../CharacterContext';
import { useContext } from 'react';
import HitPoints from './HitPoints';

type Props = {
  characterName: string;
  alignment?: string;
  experience?: number;
};

function HeaderDisplay({
  characterName,
  alignment = 'Neutral',
  experience = 0,
}: Props) {

  const {characterClass, characterRace, characterLevel, characterBackground} = useContext(CharacterContext);
  return (
    <>
        <pre>
          {JSON.stringify(
            {
              characterName,
              characterClass,
              characterRace,
              characterLevel,
              alignment,
              experience,
              characterBackground,
            },
            null,
            2,
          )}
        </pre>
        <HitPoints />
        </>
  );
}

export default HeaderDisplay;
