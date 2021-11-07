// TODO this logic could be extracted into a simple "ChooseFrom" component or hook since it is a common pattern

import {chooseFrom} from '../utilities/chooseFrom';

interface choice {
    [key: string]: any,
    choose: number,
    from: any[];
}

type Props = {
    title: string,
    choicesArray: any[]
}

const ChoicesDisplay = ({title, choicesArray}: Props) => {

    const choices: any[] = [];
    choicesArray.map(({choose, from}: choice) => {
        choices.push(...chooseFrom(choose, from.filter((option) => option?.equipment?.name !== null)));
    });

    return (
        <div>
            <p>{title}</p>
            <pre>selections: {JSON.stringify(choices, null, 2)}</pre>
            <pre>options: {JSON.stringify(choicesArray, null, 2)}</pre>
        </div>
    )
};

export default ChoicesDisplay;