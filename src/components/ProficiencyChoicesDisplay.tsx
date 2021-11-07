// TODO this logic could be extracted into a simple "ChooseFrom" component or hook since it is a common pattern

import {chooseFrom} from '../utilities/chooseFrom';

interface choice {
    [key: string]: any,
    choose: number,
    from: any[];
}

type Props = {
    proficiencyChoices: any[]
}

const ProficiencyChoicesDisplay = ({proficiencyChoices}: Props) => {

    const choices: any[] = [];
    proficiencyChoices.map(({choose, from}: choice) => {
        choices.push(chooseFrom(choose, from));
    })

    return (
        <div>
            <p>choices go here: </p>
            <pre>{JSON.stringify(choices, null, 2)}</pre>
            <pre>{JSON.stringify(proficiencyChoices, null, 2)}</pre>
        </div>
    )
};

export default ProficiencyChoicesDisplay;