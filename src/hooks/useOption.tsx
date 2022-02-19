import { useState, useEffect } from 'react';

import type { Choice } from '../types';
import chooseFrom from '../utilities/chooseFrom';

function useOption<T>(choicesArray: Choice<T>[]) {
  const [selections, setSelections] = useState<T[]>([]);

  useEffect(() => {
    if (Array.isArray(choicesArray)) {
      setSelections(choicesArray?.map((choice) => chooseFrom(choice))?.flat());
    }
  }, [choicesArray]);

  return {
    selections,
    setSelections,
  };
};

export default useOption;
