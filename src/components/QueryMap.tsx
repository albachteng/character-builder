/* takes a query and maps the results of that query using a provided mapping function */
import { useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";
// import { JsxElement } from "typescript";

type Props = {
    query: DocumentNode,
    mappingFunc: (value: any, index: number, array: any[]) => any, // ! 
    variables: {[key: string]: any},
    dataType: string
}

const QueryMap = ({query, mappingFunc, variables, dataType}: Props) => {

    const { loading, error, data } = useQuery(query, {variables});

    return (
        <>
            {loading && 'Loading...'}
            {error && 'Whoops! Something went wrong!'}
            {data && data[dataType].map(mappingFunc)
            }
        </>
    )
};

export default QueryMap;