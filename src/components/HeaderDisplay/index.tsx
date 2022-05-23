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
  // characterClass: CharacterClass;
  // characterStats: AbilityScores;
  // race: Race;
  // level: ZeroToTwenty;
  alignment?: string;
  experience?: number;
  // background?: Background;
};

function HeaderDisplay({
  characterName,
  // characterClass,
  // characterStats,
  // race,
  // level,
  alignment = 'Neutral',
  experience = 0,
  // background = 'acolyte',
}: Props) {

  // console.log(useContext(CharacterContext));
  const {characterClass, characterStats, characterRace, characterLevel, characterBackground} = useContext(CharacterContext);
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
        <HitPoints
          characterStats={characterStats}
          characterLevel={characterLevel}
          characterClass={characterClass}
        />
        </>
  );
}

export default HeaderDisplay;
