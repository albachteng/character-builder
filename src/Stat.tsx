import dice from './utilities/dice';

type Props = {
    name: string,
    total: number
};

// export interface AbilityScore {
//     name: string,
//     acronym: string,
//     total: number
// };

const Stat = ({name, total}: Props): JSX.Element => {
    return (
        <div>
            <h4>
                <strong>{name}: {total >= 10 && '+'}</strong>
                {dice.mod(total)};
            </h4>
            {/* <p>
                {stat.total}
                <sub>({stat.name})</sub>
            </p> */}
        </div>
    )
};

export default Stat;