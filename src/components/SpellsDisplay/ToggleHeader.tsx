import { Maybe } from '../../types';

export type ToggleHeaderProps<T> = {
    type: T
    title?: (item: T) => string
    index: number
    addOrRemoveToList: <U extends T>(toAdd: U) => void
    list: T[]
}

function ToggleHeader<T extends {name?: Maybe<string>}>({
  type, title, index, addOrRemoveToList, list,
}: ToggleHeaderProps<T>) {
  return (
    <div>
      <p key={`${type?.name}${index}`}>
        {title ? `${title(type)}` : type?.name}
      </p>
      <button onClick={() => addOrRemoveToList(type)}>
        {list?.includes(type) ? 'Remove' : 'Add'}
      </button>
    </div>
  );
}

export default ToggleHeader;
