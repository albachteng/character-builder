/* 
ultimately responsible for displaying character name, character class, race, level, ?alignment, ?experience, ?background 
*/ 

import { PersonalityByBackground } from '../queries';
import {AbilityScore, CharacterClass, Race} from '../types';
import HitPoints from './HitPoints';
import QueryWrapper from './QueryWrapper';
import RenderMap, { MappingFunc } from './RenderMap';
import withUseOption from './withUseOption';

type Props = {
    characterName: string,
    characterClass: CharacterClass,
    characterStats: AbilityScore, 
    race: Race,
    level: number,
    alignment?: string,
    experience?: number,
    background?: string,
};

const HeaderDisplay = ({
    characterName,
    characterClass,
    characterStats,
    race, 
    level,
    alignment = 'Neutral',
    experience = 0,
    background = ''
}: Props) => {

    const personalityMap: MappingFunc<string> = (trait, index) => {
        if (trait) {
            return (
                <p key={`Trait-${index}`}>Personality Trait: {trait}</p>
            );
        }
    }

    const RenderMapWithOption = withUseOption(RenderMap);

    return (
        <>
            <h2>Header</h2>
                <div>
                    <QueryWrapper query={PersonalityByBackground} variables={{filter: {index: background}}} dataType={['background', 'personality_traits']}>
                        <RenderMapWithOption mappingFunc={personalityMap} data={{}}/>
                    </QueryWrapper> 
                    <pre>
                        {JSON.stringify({
                            characterName,
                            characterClass,
                            race, 
                            level,
                            alignment,
                            experience,
                            background
                        }, null, 2)}
                    </pre>
                    <HitPoints 
                        characterStats={characterStats}
                        characterLevel={level}
                        characterClass={characterClass} 
                    />
                </div>
            )
        </>
    )
};

export default HeaderDisplay;