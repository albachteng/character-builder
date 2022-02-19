import { useQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';
import { cloneElement, ReactElement } from 'react';

import { JSONValue } from '../types';
import { findArray } from '../utilities/findArray';

type Props = {
  query: DocumentNode;
  variables: JSONValue;
  children: ReactElement;
  dataType: string[];
};

function QueryWrapper({
  query, variables, children, dataType,
}: Props) {
  const { loading, error, data } = useQuery(query, { variables });

  const arrayData = findArray(data, dataType);

  return (
    <>
      {loading && 'Loading!'}
      {error && 'Error!'}
      {data && cloneElement(children, { ...children.props, data: arrayData })}
    </>
  );
}

export default QueryWrapper;
