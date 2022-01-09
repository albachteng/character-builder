import { sortByOptions } from "../utilities/sortByOptions";

export type MappingFunc<T extends unknown> = (value: T, index: number, arr: T[]) => React.ReactNode;

type RenderProps = {
    mappingFunc: MappingFunc<any>
    data: {[key: string]: any}
    sortBy?: string
}

const RenderMap = ({mappingFunc, data, sortBy}: RenderProps) => {

    let toRender = data;

    if (!Array.isArray(data)) toRender = [data];

    if (sortBy) toRender = toRender.slice().sort(sortByOptions[sortBy]);

    return (
        <>
            {toRender.map(mappingFunc)}
        </>
    )
}

export default RenderMap;