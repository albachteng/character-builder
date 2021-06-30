import {AbilityScore} from './Stat';
import Stat from './Stat';

type Props = {
    stats: AbilityScore[]
};

const AbilityScores = ({stats}: Props): JSX.Element => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {stats.map((stat) => {
                return <Stat key={stat.name} stat={stat}></Stat>
            })}
        </div>
    )
};

export default AbilityScores;