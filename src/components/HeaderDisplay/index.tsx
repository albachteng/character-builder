/*
ultimately responsible for displaying character name, character class, race, level, ?alignment, ?experience, ?background
*/

import {
  AbilityScores, CharacterClass, Race, ZeroToTwenty, Background
} from '../../types';

type Props = {
  characterName?: string
  alignment?: string
  experience?: number
  characterClass: CharacterClass
  characterBackground: Background
  characterRace: Race
  characterLevel: ZeroToTwenty
};

function HeaderDisplay({
  characterClass,
  characterBackground,
  characterRace,
  characterLevel,
  characterName,
  alignment = 'Neutral',
  experience = 0,
}: Props) {

  return (
    <section>
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
    </section>
  );
}

export default HeaderDisplay;
