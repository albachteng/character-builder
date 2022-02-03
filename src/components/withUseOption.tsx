import useOption from '../hooks/useOption';
// import { Choice } from '../types';
import { useState, useEffect } from 'react';

// TODO type WithUseOptionProps = {
//     data: Choice[]
//     [key: string]: any
// }

const withUseOption =
  (Child: (props: any) => JSX.Element) =>
  ({ ...props }) => {
    const [choicesArray, setChoicesArray] = useState(props.data);

    useEffect(() => {
      if (!Array.isArray(choicesArray)) setChoicesArray([choicesArray]);
    }, [choicesArray]);

    const { selections } = useOption(choicesArray);

    return (
      <>{selections && <Child {...{ ...props, data: selections }}></Child>}</>
    );
  };

export default withUseOption;
