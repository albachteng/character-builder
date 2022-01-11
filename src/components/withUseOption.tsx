import useOption from '../hooks/useOption';
import { Choice } from '../types';

// TODO type WithUseOptionProps = {
//     data: Choice[]
//     [key: string]: any
// }

const withUseOption = (Child: (props: any) => JSX.Element) => ({...props}) => {

    let choicesArray = props.data;
    if (!Array.isArray(choicesArray)) choicesArray = [props.data];

    const { selections } = useOption(choicesArray);

    return (
        <Child {...{...props, data: selections}}></Child>
    )
}

export default withUseOption;