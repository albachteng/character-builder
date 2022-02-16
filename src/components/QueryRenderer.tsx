import { DocumentNode } from "graphql";
import { JSONValue, MappingFunc } from "../types";
import { sortByOptions } from "../utilities/sortByOptions";
import QueryWrapper from "./QueryWrapper";
import RenderMap from "./RenderMap";

type QueryRendererProps<T> = {
    mappingFunc: MappingFunc<T>
    query: DocumentNode
    variables: JSONValue
    dataType: string[]
    sortBy?: keyof typeof sortByOptions
}

const QueryRenderer = <T,>({mappingFunc, query, variables, dataType, sortBy = 'default'}: QueryRendererProps<T>) => {

    return (
        <QueryWrapper
            query={query}
            variables={variables}
            dataType={dataType}
        >
            <RenderMap
                mappingFunc={mappingFunc}
                sortBy={sortBy}
            />
        </QueryWrapper> 
    )
}

export default QueryRenderer;