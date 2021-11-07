import { AbilityScore } from './types';
import Stat from './Stat';

type Props = {
    stats: any
};

const AbilityScores = ({stats}: Props) => {
    const scores = [];
    for (let key in stats) {
        scores.push(<Stat name={key} stats={stats[key]}></Stat>)
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {scores}
        </div>
    )
};

export default AbilityScores;