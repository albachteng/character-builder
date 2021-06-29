import {AbilityScore} from './Stat';
import Stat from './Stat';

type Props = {
    stats: AbilityScore[]
};

const AbilityScores = ({stats}: Props): JSX.Element[] => {
    return (
        stats.map((stat) => {
            return <Stat stat={stat}></Stat>
        })
    )
};

export default AbilityScores;