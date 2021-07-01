import dice from './utilities/dice';

type Props = {
    stat: AbilityScore
};

export interface AbilityScore {
    name: string,
    acronym: string,
    total: number
};

const Stat = ({stat}: Props): JSX.Element => {
    return (
        <div>
            <h4>
                <strong>{stat.acronym}: {stat.total >= 10 && '+'}</strong>
                {dice.mod(stat.total)}
            </h4>
            <p>
                {stat.total}
                <sub>({stat.name})</sub>
            </p>
        </div>
    )
};

export default Stat;