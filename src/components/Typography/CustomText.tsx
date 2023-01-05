import React from 'react';
import {ITextProps, Text as NativeText} from 'native-base';

export const Text = (props: ITextProps) => {
  return (
    <NativeText color="ui.primary" fontSize="caption" {...props}>
      {props.children}
    </NativeText>
  );
};
