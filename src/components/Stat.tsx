import dice from '../utilities/dice';
// import { AbilityScore } from '../types';

type Props = {
    name: string,
    stats: any // TODO
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
                <strong>{name}: {stats >= 10 ? '+' : ''}</strong>
                {dice.mod(stats)};
            </h4>
            <p>
                Total: {stats}
            </p>
        </div>
    )
};

export default Stat;