import { JSONValue } from "../types";
import { sortByOptions } from "../utilities/sortByOptions";

export type MappingFunc<T extends unknown> = (value: T, index: number, arr: T[]) => React.ReactNode;

type RenderProps = {
    mappingFunc: MappingFunc<any>
    data?: JSONValue[]
    sortBy?: keyof typeof sortByOptions;
}

const RenderMap = ({mappingFunc, sortBy, data = []}: RenderProps) => {

    let toRender = data;

    if (!Array.isArray(data)) toRender = [data];
    // ! NTS
    //@ts-ignore
    if (sortBy) toRender = toRender.slice().filter((item) => item !== null).sort(sortByOptions[sortBy]);

    return (
        <>
            {toRender.length > 0 && toRender.map(mappingFunc)}
        </>
    )
}

export default RenderMap;
