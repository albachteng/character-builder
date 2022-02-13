/* 
ultimately responsible for displaying character name, character class, race, level, ?alignment, ?experience, ?background 
*/

import { PersonalityByBackground } from '../../queries';
import { AbilityScores, CharacterClass, Race, ZeroToTwenty } from '../../types';
import { Background } from '../../types/Background';
import HitPoints from './HitPoints';
import QueryWrapper from '../QueryWrapper';
import RenderMap, { MappingFunc } from '../RenderMap';
import withUseOption from '../withUseOption';

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

const HeaderDisplay = ({
  characterName,
  characterClass,
  characterStats,
  race,
  level,
  alignment = 'Neutral',
  experience = 0,
  background = 'acolyte'
}: Props) => {
  const personalityMap: MappingFunc<string> = (trait, index) => {
    if (trait) {
      return <p key={`${trait}${index}`}>Trait: {trait}</p>;
    }
  };

  const idealsMap: MappingFunc<any> = (ideal, index) => {
    if (ideal) {
      console.log(ideal);
      return (
        <>
          <p key={`${ideal}${index}`}>Ideal: {ideal.desc}</p>
        </>
      );
    }
  };

  const RenderMapWithOption = withUseOption(RenderMap);

  return (
    <>
      <h2>Header</h2>
      <div>
        <QueryWrapper
          query={PersonalityByBackground}
          variables={{ filter: { index: background } }}
          dataType={['background', 'personality_traits']}
        >
          <RenderMapWithOption mappingFunc={personalityMap} />
        </QueryWrapper>
        <QueryWrapper
          query={PersonalityByBackground}
          variables={{ filter: { index: background } }}
          dataType={['background', 'ideals']}
        >
          <RenderMapWithOption mappingFunc={idealsMap} />
        </QueryWrapper>
        <QueryWrapper
          query={PersonalityByBackground}
          variables={{ filter: { index: background } }}
          dataType={['background', 'bonds']}
        >
          <RenderMapWithOption mappingFunc={personalityMap} />
        </QueryWrapper>
        <QueryWrapper
          query={PersonalityByBackground}
          variables={{ filter: { index: background } }}
          dataType={['background', 'flaws']}
        >
          <RenderMapWithOption mappingFunc={personalityMap} />
        </QueryWrapper>
        <pre>
          {JSON.stringify(
            {
              characterName,
              characterClass,
              race,
              level,
              alignment,
              experience,
              background
            },
            null,
            2
          )}
        </pre>
        <HitPoints
          characterStats={characterStats}
          characterLevel={level}
          characterClass={characterClass}
        />
      </div>
    </>
  );
};

export default HeaderDisplay;