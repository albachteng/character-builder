/* 
takes a query item such as Equipment or Spell and displays all details for that type
*/

type BuildDetailsProps<T> = {
    item: T
}

const capitalize = (field: string) => {
    return field[0].toUpperCase() + field.toLowerCase().slice(1);
}

const handleValueType = (value: unknown) => {
    if (value === null) return '';
    else if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    else if (typeof value === 'number' || typeof value === 'bigint') return String(value);
    else if (typeof value === 'string') return handleString(value);
    else if (Array.isArray(value)) return value.forEach((item) => handleString(item));
    else if (typeof value === 'object' && value !== null) return <BuildDetails<typeof value> item={value}/>
    else return '';
}

const handleString = (value: string) => {
    if (value.length < 20) return <span>{value}</span>
    else return <p>{value}</p> 
}

const BuildDetails = <T extends object>({item}: BuildDetailsProps<T>) => {
    const entries = Object.entries(item);
    return (
        <>
        {entries.map(([key, value]) => {
        const handledValue = handleValueType(value);
        if ( handledValue === null 
            || handledValue === undefined 
            || handledValue === ''
            || key === '__typename'
            || key === 'index') return;
        return (
            <>
                <span style={{display: "inline"}}>
                    <span>{capitalize(key)} </span> 
                    <span>
                        {typeof handledValue === 'string'
                            ? handleString(handledValue)
                            : handledValue as JSX.Element
                        }
                    </span>
                </span>
                <br></br>
            </>
        )})}
        </>
    );
}

export default BuildDetails