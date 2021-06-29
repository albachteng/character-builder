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
                {Math.floor((stat.total - 10)/2)}
            </h4>
            <p>
                {stat.total}
                <sub>({stat.name})</sub>
            </p>
        </div>
    )
};

export default Stat;