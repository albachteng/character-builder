/* 
responsible for displaying a list of <Proficiency/>s 
takes in stats object and level as props and bonuses
*/

import Proficiency from './Proficiency';

type Skill = 
    'Acrobatics' | 
    'Animal Handling' | 
    'Arcana' |
    'Athletics' |
    'Deception' | 
    'History' | 
    'Insight' | 
    'Intimidation' | 
    'Investigation' | 
    'Medicine' | 
    'Nature' | 
    'Perception' | 
    'Performance' | 
    'Persuasion' | 
    'Religion' | 
    'Slight of Hand' | 
    'Stealth' | 
    'Survival'
;

const ProficiencyDisplay = () => {
    const proficienciesArray: typeof Proficiency[] = [];
    // TODO props.map((stat) => <Proficiency/>)
    return(
        {proficienciesArray}
    )
};

export default ProficiencyDisplay;