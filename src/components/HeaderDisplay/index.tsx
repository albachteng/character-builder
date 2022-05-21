/*
ultimately responsible for displaying character name, character class, race, level, ?alignment, ?experience, ?background
*/

import {
  AbilityScores, CharacterClass, Race, ZeroToTwenty,
} from '../../types';
import { Background } from '../../types/Background';
import HitPoints from './HitPoints';

type Props = {
  characterName: string;
  characterClass: CharacterClass;
  characterStats: AbilityScores;
  race: Race;
  level: ZeroToTwenty;
  alignment?: string;
  experience?: number;
  background?: Background;
};

function HeaderDisplay({
  characterName,
  characterClass,
  characterStats,
  race,
  level,
  alignment = 'Neutral',
  experience = 0,
  background = 'acolyte',
}: Props) {
  return (
    <>
        <pre>
          {JSON.stringify(
            {
              characterName,
              characterClass,
              race,
              level,
              alignment,
              experience,
              background,
            },
            null,
            2,
          )}
        </pre>
        <HitPoints
          characterStats={characterStats}
          characterLevel={level}
          characterClass={characterClass}
        />
        </>
  );
}

export default HeaderDisplay;
