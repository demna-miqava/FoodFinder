import React from 'react';
import {Button} from 'native-base';

interface Props {
  text: string;
  onPress: () => void;
  styles: {
    [key: string]: string | number;
  };
  disabled?: boolean;
  isLoading?: boolean;
  isLoadingText?: string;
}

export const ButtonComponent = ({
  text,
  onPress,
  styles,
  disabled,
  isLoading,
  isLoadingText,
}: Props) => {
  return (
    <Button
      {...styles}
      onPress={onPress}
      isDisabled={disabled}
      isLoadingText={isLoadingText}
      isLoading={isLoading}>
      {text}
    </Button>
  );
};
