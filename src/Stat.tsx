import dice from './utilities/dice';
import { AbilityScore } from './types';

type Props = {
    name: string,
    stats: any
};

// export interface AbilityScore {
//     name: string,
//     acronym: string,
//     total: number
// };

const Stat = ({name, stats}: Props): JSX.Element => {
    return (
        <div>
            <h4>
                <strong>{name}: {stats[name] >= 10 ? '+' : '-'}</strong>
                {dice.mod(stats[name])};
            </h4>
            {/* <p>
                {stat.total}
                <sub>({stat.name})</sub>
            </p> */}
        </div>
    )
};

export default Stat;