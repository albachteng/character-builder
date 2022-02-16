import { Maybe } from "../../types";

type ToggleHeaderProps<T> = {
    type: T
    title?: string
    index: number
    handleClick: <U extends T>(toAdd: U) => void 
    list: T[]
}

const ToggleHeader = <T extends {name: Maybe<string>, level: Maybe<number>}>({type, title, index, handleClick, list}: ToggleHeaderProps<T>) => {

    return (
        <div>
        <p key={`${type?.name}${index}`}>
            {title ? `${title}` : type?.name}
        </p>
        <button onClick={() => handleClick(type)}>
            {list?.includes(type) ? 'Remove' : 'Add'}
        </button>
        </div>
    );

}

export default ToggleHeader;