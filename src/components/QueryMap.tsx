/* takes a query and maps the results of that query 
using a provided mapping function */

import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import OptionWrapper from "./OptionWrapper";
import { DocumentNode } from "graphql";
import { findArray } from '../utilities/findArray';
import * as React from "react";

export type MappingFunc<T> = (value: T, index: number, arr: T[]) => React.ReactNode;

export type FilterFunc<T> = (value: T) => boolean;

export type SortFunc<T> = (first: T, second: T) => number;

type Props = {
    query: DocumentNode,
    mappingFunc: MappingFunc<any>, 
    variables: {[key: string]: any},
    dataType: string[],
    useOption?: boolean,
    filterFunc?: FilterFunc<any>, 
    sortFunc?: SortFunc<any>, // ! I suspect we can replace these anys with {[key: string]: any}
}

const QueryMap = ({query, mappingFunc, variables, dataType, useOption = false, filterFunc, sortFunc = () => {return 0}}: Props) => {

    const [ render, setRender] = useState<React.ReactNode>([]);
    const { loading, error, data } = useQuery(query, {variables});


    useEffect(() => {
        let response = findArray(data, dataType);
        // if (data && filterFunc && Array.isArray(response)) response.filter(filterFunc);
        if (data && sortFunc && Array.isArray(response)) response = response.slice().sort(sortFunc);
        if (data && !useOption && Array.isArray(response)) setRender(response.map(mappingFunc));
        if (data && !useOption && !Array.isArray(response)) setRender([mappingFunc(response, 0, [])]);
        if (useOption) return;
    }, [mappingFunc, dataType, data, useOption, filterFunc, sortFunc])

    return (
        <>
            {loading && 'Loading...'}
            {error && 'Whoops! Something went wrong!'}
            {(data && !useOption && Array.isArray(render)) && render}
            {(data && !useOption && !Array.isArray(render)) && mappingFunc(render, 0, [])}
            {(data && useOption && Array.isArray(render)) && 
                <OptionWrapper 
                    choicesArray={findArray(data, dataType)} 
                    mappingFunc={mappingFunc}
                />
            }
        </>
    )
};

export default QueryMap;