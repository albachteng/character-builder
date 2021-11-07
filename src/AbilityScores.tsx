import { AbilityScore } from './types';
import Stat from './Stat';

type Props = {
    stats: any
};

const AbilityScores = ({stats}: Props) => {
    const scores: any = [];
    const keys = Object.keys(stats);
    console.log({keys});
    keys.forEach((key) => {
        scores.push(<Stat name={key} stats={stats[key]}></Stat>)
    });

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {scores}
        </div>
    )
};

export default AbilityScores;