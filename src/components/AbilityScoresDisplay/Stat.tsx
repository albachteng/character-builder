import dice from '../../utilities/dice';

type Props = {
  name: string;
  stats: number; // TODO
};

function Stat({ name, stats }: Props): JSX.Element {
  return (
    <div>
      <h4>
        <strong>
          {name}
          :
          {stats >= 10 ? '+' : ''}
        </strong>
        {dice.mod(stats)}
        ;
      </h4>
      <p>
        Total:
        {stats}
      </p>
    </div>
  );
}

export default Stat;
