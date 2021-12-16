/* 
ultimately responsible for displaying character name, character class, race, level, ?alignment, ?experience, ?background 
*/ 

import {AbilityScore, CharacterClass, Race} from '../types';
import HitPoints from './HitPoints';
import { HitDice } from '../queries/HitDice';
import { useQuery } from '@apollo/client';

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

    const { loading, error, data } = useQuery(HitDice);

    return (
        <>
            {loading && 'Loading...'}
            {error && 'Whoops! Something went wrong!'}
            {data && (              
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
                    {data && <HitPoints 
                        hit_die={data?.class.hit_die} 
                        CON={characterStats.CON} 
                        characterClass={characterClass} 
                        level={level}
                    />}
                </p>
            )}
        </>
    )
};

export default HeaderDisplay;