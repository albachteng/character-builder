/* takes a query and maps the results of that query using a provided mapping function */
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import OptionWrapper from "./OptionWrapper";
import { DocumentNode } from "graphql";
import { findArray } from '../utilities/findArray';
import * as React from "react";
// import { JsxElement } from "typescript";

type Props = {
    query: DocumentNode,
    mappingFunc: (value: any, index: number, array: any[]) => any, // ! 
    variables: {[key: string]: any},
    dataType: string[],
    useOption?: boolean,
}

const QueryMap = ({query, mappingFunc, variables, dataType, useOption = false}: Props) => {

    const [ render, setRender] = useState<any[]>([]);
    const { loading, error, data } = useQuery(query, {variables});

    const response = findArray(data, dataType);

    useEffect(() => {
        if (data && !useOption && Array.isArray(response)) setRender(response.map(mappingFunc));
        if (data && !useOption && !Array.isArray(response)) setRender(mappingFunc(response, 0, []));
        if (useOption) return;
    }, [mappingFunc, response, data, useOption])

    return (
        <>
            {loading && 'Loading...'}
            {error && 'Whoops! Something went wrong!'}
            {(data && !useOption && Array.isArray(response)) && render}
            {(data && !useOption && !Array.isArray(response)) && mappingFunc(response, 0, [])}
            {(data && useOption && Array.isArray(response)) && 
                <OptionWrapper 
                    choicesArray={response} 
                    mappingFunc={mappingFunc}
                />
            }
        </>
    )
};

export default QueryMap;