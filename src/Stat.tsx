import dice from './utilities/dice';
import { AbilityScore } from './types';
import { Stats } from 'fs';

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
    console.log({stats});
    return (
        <div>
            <h4>
                <strong>{name}: {Number(stats) >= 10 ? '+' : ''}</strong>
                {dice.mod(Number(stats))};
            </h4>
            <p>
                Total: {stats}
            </p>
        </div>
    )
};

export default Stat;