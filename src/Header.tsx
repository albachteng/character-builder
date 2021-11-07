/* 
ultimately responsible for displaying character name, character class, race, level, ?alignment, ?experience, ?background 
*/ 

import {CharacterClass, Race} from './types';

type Props = {
    characterName: string,
    characterClass: CharacterClass,
    race: Race
    level: number,
    alignment?: string,
    experience?: number,
    background?: string,
};

const Header = ({
    characterName,
    characterClass,
    race, 
    level,
    alignment = 'Neutral',
    experience = 0,
    background = ''
}: Props) => {

    return (
        <h1>
            {JSON.stringify({
                characterName,
                characterClass,
                race, 
                level,
                alignment,
                experience,
                background
            }, null, 2)}
        </h1>
    )
};

export default Header;