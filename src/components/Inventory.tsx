import ChoicesDisplay from "./ChoicesDisplay";
import { EQUIPMENTOPTIONS } from "../queries";
import { useQuery } from '@apollo/client';

type Props = {
    characterClass: string,
}

const InventoryDisplay = ({characterClass}: Props) => {
    
    const { loading, error, data } = useQuery(EQUIPMENTOPTIONS, {
        variables: {"filter": {"index": characterClass}}
      });

    return (
        <>
            {loading && 'Loading...'}
            {error && 'Whoops! Something went wrong!'}
            {data && (
                <div>
                    <ChoicesDisplay title="Equipment Choices" choicesArray={data?.class.starting_equipment_options}/>
                    <h3>Inventory:</h3>
                    {/* {selections && <ul>
                        {selections.map((choice) => <li>{choice?.equipment?.name}: {choice?.quantity}</li>)}
                    </ul>} */}
                    <ul>
                        {/* <StartingClassEquipment></StartingClassEquipment> */}
                    </ul>
                </div>
            )}
        </>
    )
};

export default InventoryDisplay;