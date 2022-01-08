import useOption from '../hooks/useOption';
import { Choice } from '../types';

type WithUseChoiceProps = {
    data: Choice[]
    [key: string]: any
}

const withUseOption = (Child: (props: any) => JSX.Element) => ({...props}) => {

    const { selections } = useOption(props.data);

    return (
        <Child {...{...props, data: selections}}></Child>
    )
}

export default withUseOption;