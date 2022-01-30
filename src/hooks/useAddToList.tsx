/* */
import { useState } from "react";

const useAddToList = <T,>() => {

    const [list, setList] = useState<T[]>([]);

    const handleClick = <U extends T,>(toAdd: U) => {
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