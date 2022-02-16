import useAddToList from "../hooks/useAddToList";
import withOnClick from "./withOnClick";
import QueryWrapper from "./QueryWrapper";
import RenderMap, { MappingFunc } from "./RenderMap";
import QueryRenderer from "./QueryRenderer";
import { DocumentNode } from "graphql";
import { JSONValue } from "../types";
import { sortByOptions } from "../utilities/sortByOptions";


type ToggleListProps<T> = {
    mappingFunc: MappingFunc<T>
    query: DocumentNode
    variables: JSONValue
    dataType: string[]
    sortBy?: keyof typeof sortByOptions
}

const ToggleList = <T,>({mappingFunc, query, variables, dataType, sortBy = 'default'}: ToggleListProps<T>) => {

    const { handleClick, list } = useAddToList<T>();

    /* 
    to render the toggle list and selection list, we need a header (that accepts 
    handleClick and list) and a description so that we can add useonclickdesc. 

    */

    return (
        <>
            <h4>Select from this list to add:</h4>
            <QueryRenderer
                query={query}
                variables={variables}
                dataType={dataType}
                mappingFunc={mappingFunc}
                sortBy={sortBy}
            />
            <h4>Added: {`${list.length}`} </h4>
            {list.map(mappingFunc)}
        </>
    )
}

export default ToggleList;