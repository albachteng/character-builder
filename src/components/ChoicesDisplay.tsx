// TODO this logic could be extracted into a simple "ChooseFrom" component or hook since it is a common pattern
import { useEffect } from 'react';
import useOption from '../hooks/useOption';
// import {chooseFrom} from '../utilities/chooseFrom';

interface choice {
    [key: string]: any, // can we rule out that the choices will have other fields? 
    choose: number,
    from: any[]; // 
}

type Props = {
    title: string,
    choicesArray: choice[] // should be an array of choices
}

const ChoicesDisplay = ({title, choicesArray}: Props) => {

    // const choices = choicesArray.map(({choose, from}: choice) => {
    //     return chooseFrom(choose, from.filter((option) => option?.equipment?.name !== null));
    // });
    const {choose, selections} = useOption();

    useEffect(() => {
        choose(choicesArray);
    }, []);

    // TODO if title is proficiency then we should be lifting state up so that the proficiency bonuses can be applied

    return (
        <div>
            <p>{title}</p>
            <pre>selections: {JSON.stringify(selections, null, 2)}</pre>
            <pre>options: {JSON.stringify(choicesArray, null, 2)}</pre>
        </div>
    )
};

export default ChoicesDisplay;