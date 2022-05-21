import QueryWrapper from "./QueryWrapper";
import RenderMap from "./RenderMap";
import withUseOption from "./withUseOption";
import { QueryRendererProps } from './QueryRenderer';

function QueryRendererWithOption<T>({
  mappingFunc, query, variables, dataType, sortBy = 'default',
}: QueryRendererProps<T>) {

  const RenderMapWithOption = withUseOption(RenderMap);

  return (
    <QueryWrapper
      query={query}
      variables={variables}
      dataType={dataType}
    >
      <RenderMapWithOption
        mappingFunc={mappingFunc}
        sortBy={sortBy}
      />
    </QueryWrapper>
  );
}

export default QueryRendererWithOption;
