/* 
ultimately responsible for displaying character name, character class, race, level, ?alignment, ?experience, ?background 
*/ 

import {AbilityScore, CharacterClass, Race} from '../types';
import HitPoints from './HitPoints';

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


    return (
        <>
            <h2>Header</h2>
                <p>
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
                </p>
            )
        </>
    )
};

export default HeaderDisplay;