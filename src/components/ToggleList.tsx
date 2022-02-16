import useAddToList from "../hooks/useAddToList";
import withOnClick from "./withOnClick";
import { MappingFunc } from "./RenderMap";
import QueryRenderer from "./QueryRenderer";
import { DocumentNode } from "graphql";
import { JSONValue, Maybe } from "../types";
import { sortByOptions } from "../utilities/sortByOptions";
import ToggleHeader, { ToggleHeaderProps } from "./SpellsDisplay/ToggleHeader";


type ToggleListProps<T, U> = {
    query: DocumentNode
    variables: JSONValue
    dataType: string[]
    sortBy?: keyof typeof sortByOptions
    Details: (props: U) => JSX.Element // ! 
    title?: string
    DetailsProps: U
}

const ToggleList = <T extends {name: Maybe<string>}, U>({
    query, 
    variables, 
    dataType, 
    Details, 
    DetailsProps, 
    title, 
    sortBy = 'default'
}: ToggleListProps<T, U>) => {

    const { handleClick, list } = useAddToList<T>();

    const mappingFunc: MappingFunc<T> = (item, index, arr) => {
        
        const ToggleHeaderProps: ToggleHeaderProps<T> = {
            type: item,
            title,
            index,
            handleClick,
            list 
        } 
        
        const Header = () => <ToggleHeader<T> {...ToggleHeaderProps}/>;
        const DetailsWithOnClick = withOnClick(Details, Header);
        return (
            <DetailsWithOnClick 
                id={`${item.name}-${index}`} 
                key={`${item.name}-${index}`}
                {...DetailsProps}
            />
        )
    }

    return (
        <>
            <h4>Select from this list to add:</h4>
            <QueryRenderer
                query={query}
                variables={variables}
                dataType={dataType}
                mappingFunc={mappingFunc}
                sortBy={sortBy}
            />
            <h4>Added: {`${list.length}`} </h4>
            {list.map(mappingFunc)}
        </>
    )
}

export default ToggleList;