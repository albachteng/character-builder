/* takes a query and maps the results of that query 
using a provided mapping function */

import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import OptionWrapper from "./OptionWrapper";
import { DocumentNode } from "graphql";
import { findArray } from '../utilities/findArray';
import * as React from "react";
import { sortByOptions } from "../utilities/sortByOptions";

export type MappingFunc<T> = (value: T, index: number, arr: T[]) => React.ReactNode;

type Props = {
    query: DocumentNode,
    mappingFunc: MappingFunc<any>, 
    variables: {[key: string]: any},
    dataType: string[],
    useOption?: boolean,
    sortBy?: string,
}

const QueryMap = ({query, mappingFunc, variables, dataType, useOption = false, sortBy}: Props) => {

    const [ render, setRender] = useState<React.ReactNode>([]);
    const { loading, error, data } = useQuery(query, {variables});

    const response = findArray(data, dataType);

    useEffect(() => {
        if (data && !useOption && Array.isArray(response)) {
            setRender(response
                .slice()
                .sort(sortByOptions[sortBy || 'default'])
                .map(mappingFunc));
        };
        if (data && !useOption && !Array.isArray(response)) setRender([mappingFunc(response, 0, [])]);
    }, [mappingFunc, response, data, useOption, sortBy])

    return (
        <>
            {loading && 'Loading...'}
            {error && 'Whoops! Something went wrong!'}
            {(data && !useOption) && render}
            {/* {(data && !useOption && !Array.isArray(response)) && mappingFunc(response, 0, [])} */}
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