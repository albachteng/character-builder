export type MappingFunc<T> = (value: T, index: number, arr: T[]) => React.ReactNode;

type RenderProps = {
    mappingFunc: MappingFunc<any>
    data: {[key: string]: any};
}

const RenderMap = ({mappingFunc, data}: RenderProps) => {

    let toRender = data;

    if (!Array.isArray(data)) toRender = [data]; // NTS

    return (
        <>
            {toRender.map(mappingFunc)}
        </>
    )
}

export default RenderMap;