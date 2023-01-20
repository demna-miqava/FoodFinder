import React from 'react';
import {View} from 'native-base';

type SpacerComponentProps = {
  width?: number | string;
  height?: number | string;
};

export const SpacerComponent = ({width, height}: SpacerComponentProps) => {
  return <View width={width} height={height} backgroundColor="transparent" />;
};
