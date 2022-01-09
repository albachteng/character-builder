import { useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";
import { cloneElement, ReactElement } from 'react';
import { findArray } from "../utilities/findArray";

type Props = {
    query: DocumentNode
    variables: {[key: string]: any}
    children: ReactElement
    dataType: string[]
};

const QueryWrapper = ({query, variables, children, dataType}: Props) => {

    const { loading, error, data } = useQuery(query, {variables});
    
    const arrayData = findArray(data, dataType);

    console.log('in QueryWrapper: ', {arrayData});

    return (

        <>
            {loading && 'Loading!'}
            {error && 'Error!'}
            {data && cloneElement(children, {...children.props, data: arrayData})}
        </>
    )
}

export default QueryWrapper;
