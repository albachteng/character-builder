import React from 'react';

type DisplayProps = {
    data: object
} 

const Display = ({data}: DisplayProps): JSX.Element => {
    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
        )    
    }

export default Display; 