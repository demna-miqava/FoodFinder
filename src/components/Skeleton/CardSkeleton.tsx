import {ThemeType} from '@app/theme';
import {Skeleton, useTheme, VStack} from 'native-base';
import React from 'react';

export const CardSkeleton = () => {
  const theme = useTheme();
  return (
    <VStack style={stylesBuilder(theme).container}>
      <Skeleton h="150" />
      <Skeleton my="2" h="20" />
      <Skeleton h="20" />
    </VStack>
  );
};

const stylesBuilder = (theme: ThemeType) => ({
  container: {
    borderRadius: theme.space[2],
    backgroundColor: theme.colors.bg.primary,
    padding: theme.space[3],
    marginBottom: theme.space[3],
  },
});
