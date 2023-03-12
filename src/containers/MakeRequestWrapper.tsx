import React from 'react';

interface Props {
  isFetching: boolean;
  isError: boolean;
  isEmpty: boolean;
  data: any;
  renderLoader: () => React.ReactElement;
  renderData: (items: any[]) => React.ReactElement;
}

export const MakeRequestWrapper = ({
  isFetching,
  isError,
  isEmpty,
  data,
  renderLoader,
  renderData,
}: Props) => {
  if (isFetching) {
    return renderLoader();
  }
  // add error and empty state handling
  if (isError || isEmpty) {
    return null;
  }
  return renderData(data);
};
