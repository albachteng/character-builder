import { JSONValue, MappingFunc } from '../types';
import { makeUniqueId } from '@apollo/client/utilities';
import { sortByOptions } from '../utilities/sortByOptions';

type RenderProps = {
  mappingFunc: MappingFunc<any>;
  data?: JSONValue[] | null;
  sortBy?: keyof typeof sortByOptions;
};

function RenderMap({ mappingFunc, sortBy, data = [] }: RenderProps) {
  let toRender = data;

  if (!Array.isArray(data)) toRender = [data];
  // ! NTS
  // if (sortBy) {
  //   toRender = toRender
  //     .slice()
  //     .filter((item) => item !== null)
  //   // @ts-ignore
  //     .sort(sortByOptions[sortBy]);
  // }
  if (toRender) return <>{toRender?.length > 0 && toRender?.map(mappingFunc)}</>;
  return <></>
}

export default RenderMap;
