/*
ultimately responsible for displaying character name, character class, race, level, ?alignment, ?experience, ?background
*/

import {
  AbilityScores, CharacterClass, Race, ZeroToTwenty, Background
} from '../../types';
import HitPoints from './HitPoints';

type Props = {
  characterName?: string
  alignment?: string
  experience?: number
  characterClass: CharacterClass
  characterBackground: Background
  characterRace: Race
  characterStats: AbilityScores
  characterLevel: ZeroToTwenty
};

function HeaderDisplay({
  characterStats,
  characterClass,
  characterBackground,
  characterRace,
  characterLevel,
  characterName,
  alignment = 'Neutral',
  experience = 0,
}: Props) {

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
        <HitPoints characterClass={characterClass} characterStats={characterStats} characterLevel={characterLevel}/>
        </>
  );
}

export default HeaderDisplay;
