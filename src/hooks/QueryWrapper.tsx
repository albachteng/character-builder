/* wraps a useQuery call */ 

import { DocumentNode, useQuery } from '@apollo/client';

type Props = {
    query: DocumentNode,
    children: React.ReactChildren,
    variables?: {[key: string]: any},
};

const QueryWrapper = ({query, children, variables}: Props) => {

    const { loading, error, data } = useQuery(query, variables);

    return ( 
        <>
            {loading && 'Loading...'}
            {error && 'Whoops! Something went wrong!'}
            {data && (
                {children}
            )}
        </>
    )
}

export default QueryWrapper;