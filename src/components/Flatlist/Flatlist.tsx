import React from 'react';
import {FlatList} from 'native-base';

interface Props {
  data: unknown[];
  keyExtractor: (item: any) => string;
  renderItem: (item: any) => React.ReactElement;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  horizontal?: boolean;
  onEndReached?: () => void;
  onEndReachedThreshold: number;
  footerComponent?: React.ReactElement;
  mb?: number;
}

export const CustomFlatlist = ({
  data,
  renderItem,
  keyExtractor,
  horizontal = false,
  showsVerticalScrollIndicator = false,
  showsHorizontalScrollIndicator = false,
  onEndReached,
  onEndReachedThreshold = 0.5,
  footerComponent,
  mb,
}: Props) => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      horizontal={horizontal}
      mb={mb}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={() => {
        onEndReached && onEndReached();
      }}
      onEndReachedThreshold={onEndReachedThreshold}
      ListFooterComponent={footerComponent}
    />
  );
};
