/*
ultimately responsible for displaying character name, character class, race, level, ?alignment, ?experience, ?background
*/

import {
  AbilityScores, CharacterClass, Race, ZeroToTwenty, Background
} from '../../types';
import OnClickInput from './OnClickInput';


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

  const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

  return (
    <section>
      <OnClickInput>{characterName}</OnClickInput>
      <OnClickInput>{capitalize(characterClass)}</OnClickInput>
      <OnClickInput>{capitalize(characterRace)}</OnClickInput>
      <OnClickInput>{characterLevel}</OnClickInput>
      <OnClickInput>{capitalize(alignment)}</OnClickInput>
      <OnClickInput>{experience}</OnClickInput>
    </section>
  );
}

export default HeaderDisplay;
