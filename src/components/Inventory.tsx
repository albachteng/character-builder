import useOption from "../hooks/useOption";
import ChoicesDisplay from "./ChoicesDisplay";
import { EQUIPMENTOPTIONS } from "../queries";
import { useQuery } from '@apollo/client';
import type {choice} from '../types';

type Props = {
    characterClass: string,
}

const Inventory = ({characterClass}: Props) => {
    
    // console.group({selections});
    const { loading, error, data } = useQuery(EQUIPMENTOPTIONS, {
        variables: {"FilterFindManyFeatureInput": {"class": {"index": characterClass}}}
      });

    // const { selections } = useOption(data);

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
                </div>
            )}
        </>
    )
};

export default Inventory;