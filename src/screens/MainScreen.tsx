import {Text, useTheme} from 'native-base';
import React from 'react';

type Props = {};

const MainScreen = (props: Props) => {
  const theme = useTheme();
  return <Text fontFamily={theme.fontConfig.kalamRegular}>Food Finder</Text>;
};

export default MainScreen;
