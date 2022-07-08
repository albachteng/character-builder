import { Rolls } from "../../hooks/useHP";
import { ZeroToTwenty } from "../../types";

type Props = {
  rolls: Rolls
  CON: number
}

function HPDetails({rolls, CON}: Props) {

  const entries = Object.entries(rolls);

  return (
    <div>
    {entries.map(([level, roll]) => {
      if (roll + CON < 1) return <p>{`Level ${level}: 1 (default, roll + CON were less than 1)`}</p>
      return <p>{`Level ${level}: ${roll} + ${CON} (CON)`}</p>
    })}
    </div>
  )
}

export default HPDetails;
