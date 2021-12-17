import useOption from '../hooks/useOption';
import type { Choice } from '../types';

type Props = {
    title: string,
    choicesArray: Choice[] 
}

const ChoicesDisplay = ({title, choicesArray}: Props) => {

    const {selections} = useOption(choicesArray);

    return (
        <div>
            <p>{title}</p>
            <pre>selections: {JSON.stringify(selections, null, 2)}</pre>
            <pre>options: {JSON.stringify(choicesArray, null, 2)}</pre>
        </div>
    )
};

export default ChoicesDisplay;