import React from 'react';

const Display = ({data}) => {
    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
}

export default Display; 