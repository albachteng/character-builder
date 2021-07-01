import { AbilityScore } from './Stat';
import Stat from './Stat';

type Props = {
    stats: AbilityScore[]
};

const AbilityScores = ({stats}: Props) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {stats.map((stat) => {
                return <Stat key={stat.name} stat={stat}/>
            })}
        </div>
    )
};

export default AbilityScores;