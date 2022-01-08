import { MappingFunc } from './QueryMap';

type RenderProps = {
    mappingFunc: MappingFunc<any>
    data: {[key: string]: any};
}

const QueryRender = ({mappingFunc, data}: RenderProps) => {

    return (
        <>
            {data.map(mappingFunc)}
        </>
    )
}

export default QueryRender;