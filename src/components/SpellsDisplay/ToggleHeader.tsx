import { Maybe } from "../../types";

export type ToggleHeaderProps<T> = {
    type: T
    title?: string
    index: number
    handleClick: <U extends T>(toAdd: U) => void 
    list: T[]
}

const ToggleHeader = <T extends {name: Maybe<string>}>({type, title, index, handleClick, list}: ToggleHeaderProps<T>) => {

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