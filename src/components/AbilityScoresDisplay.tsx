import { ReactNode } from 'react';
import { AbilityScore } from '../types';
import Stat from './Stat';

type Props = {
    stats: AbilityScore 
};

const AbilityScoresDisplay = ({stats}: Props) => {
    const scores: ReactNode[] = [];
    let key: keyof AbilityScore;
    for (key in stats) {
        scores.push(<Stat name={key} key={`${key}${stats[key]}`} stats={stats[key]}></Stat>)
    };

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {scores}
        </div>
    )
};

export default AbilityScoresDisplay;