import Stat from './Stat';
// import {AbilityScore} from '../types'

type Props = {
    stats: {[key: string]: any}
};

const AbilityScoresDisplay = ({stats}: Props) => {
    const scores: any = [];
    const keys = Object.keys(stats);
    keys.forEach((key, index) => {
        scores.push(<Stat name={key} key={`${key}${index}`} stats={stats[key]}></Stat>)
    });

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {scores}
        </div>
    )
};

export default AbilityScoresDisplay;