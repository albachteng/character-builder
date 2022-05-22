import { DocumentNode } from 'graphql';

import useAddToList from '../../hooks/useAddToList';
import { JSONValue, MappingFunc, Maybe } from '../../types';
import { sortByOptions } from '../../utilities/sortByOptions';
import QueryRenderer from '../QueryRenderer';
import ToggleHeader, { ToggleHeaderProps } from '../SpellsDisplay/ToggleHeader';
import withOnClick from '../withOnClick';

type ToggleListProps<T> = {
    query: DocumentNode
    variables: JSONValue
    dataType: string[]
    sortBy?: keyof typeof sortByOptions
    Details: (props: any) => JSX.Element // !
    title?: (item: T) => string
    initial?: T[]
}

function ToggleList<T extends {name?: Maybe<string>}>({
  query,
  variables,
  dataType,
  Details,
  title,
  initial = [],
  sortBy = 'default',
}: ToggleListProps<T>) {

  const { handleClick, list } = useAddToList<T>(initial);

  const mappingFunc: MappingFunc<T> = (item, index, _) => {
    const ToggleHeaderProps: ToggleHeaderProps<T> = {
      type: item,
      title,
      index,
      handleClick,
      list,
    };

    function Header() {
      return <ToggleHeader<T> {...ToggleHeaderProps} />;
    }
    const DetailsWithOnClick = withOnClick(Details, Header);

    return (
      <DetailsWithOnClick
        item={item}
        id={`${item.name}-${index}`}
        key={`${item.name}-${index}`}
      />
    );
  };

  return (
    <>
      <h4>Select from this list to add:</h4>
      <div style={{ height: '50vh', overflowY: 'scroll' }}>
        <QueryRenderer
          query={query}
          variables={variables}
          dataType={dataType}
          mappingFunc={mappingFunc}
          sortBy={sortBy}
        />
      </div>
      <h4>
        Added:
        {`${list.length}`}
      </h4>
      {list.map(mappingFunc)}
    </>
  );
}

export default ToggleList;
