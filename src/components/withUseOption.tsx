import { useState, useEffect } from 'react';

import useOption from '../hooks/useOption';

// TODO type WithUseOptionProps = {
//     data: Choice[]
//     [key: string]: any
// }

const withUseOption = (Child: (props: any) => JSX.Element) => function ({ ...props }) {
  const [choicesArray, setChoicesArray] = useState(props.data);

  useEffect(() => {
    if (!Array.isArray(choicesArray)) setChoicesArray([choicesArray]);
  }, [choicesArray]);

  const { selections } = useOption(choicesArray);

  return (
    <>{selections && <Child {...{ ...props, data: selections }} />}</>
  );
};

export default withUseOption;
