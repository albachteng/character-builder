/* */
import { useState } from "react";

function useAddToList<T>() {

    const [list, setList] = useState<T[]>([]);

    function handleClick<U extends T>(toAdd: U) {
        list.includes(toAdd) 
            ? setList(list.slice().filter((item) => item !== toAdd))
            : setList(prev => [...prev, toAdd]); 
    };

    return {
        handleClick,
        list
    };
};

export default useAddToList;