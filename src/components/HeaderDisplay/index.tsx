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
  characterName = "Give this one a name",
  alignment = 'Neutral',
  experience = 0,
}: Props) {

  return (
    <section>
      <OnClickInput label={"Name"} initialValue={characterName}/>
      <OnClickInput label={"Class"} initialValue={characterClass}/>
      <OnClickInput label={"Race"} initialValue={characterRace}/>
      <OnClickInput label={"Level"} initialValue={characterLevel}/>
      <OnClickInput label={"Alignment"} initialValue={alignment}/>
      <OnClickInput label={"Experience"} initialValue={experience}/>
    </section>
  );
}

export default HeaderDisplay;
