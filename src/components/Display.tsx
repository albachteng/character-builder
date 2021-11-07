type DisplayProps = {
    data: object
} 

const Display = ({data}: DisplayProps): JSX.Element => {

    return (
        <pre style={{ // !
            margin: '0 auto', 
            padding: '1 rem', 
            height: '50vh', 
            width:'90vw', 
            overflowY: 'scroll', 
            overflowX: 'hidden', 
            textOverflow: 'ellipsis'
        }}>
            {JSON.stringify(data, null, 2)}
        </pre>
        )
    }

export default Display; 