/* */
import { useEffect, useState } from 'react';

function useAddToList<T>(initial: T[] = []) {

  const [list, setList] = useState<T[]>(initial)

  function addOrRemoveToList<U extends T>(toAdd: U) {
    list.includes(toAdd)
      ? setList(list.slice().filter((item) => item !== toAdd))
      : setList((prev) => [...prev, toAdd]);
  }

  return {
    addOrRemoveToList,
    list
  };
}

export default useAddToList;
