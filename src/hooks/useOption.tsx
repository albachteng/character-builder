import { useState, useEffect } from 'react';
import { chooseFrom } from '../utilities/chooseFrom';
import type { Choice } from '../types';

const useOption = (choicesArray: Choice<unknown>[]) => {
  const [selections, setSelections]: [any[], React.Dispatch<any>] = useState(
    []
  ); // !

  useEffect(() => {
    if (Array.isArray(choicesArray)) {
      setSelections(choicesArray.map((choice) => chooseFrom(choice)).flat());
    }
  }, [choicesArray]);

  return {
    selections,
    setSelections
  };
};

export default useOption;
