import React from 'react';
import {Button} from '@components/Button';

interface Props {
  text: string;
  onPress: () => void;
  disabled: boolean;
  isLoading: boolean;
  isLoadingText: string;
}

export const AuthButton = ({
  text,
  onPress,
  disabled,
  isLoading,
  isLoadingText,
}: Props) => {
  return (
    <Button
      text={text}
      onPress={onPress}
      styles={btnStyles}
      disabled={disabled}
      isLoading={isLoading}
      isLoadingText={isLoadingText}
    />
  );
};

const btnStyles = {
  alignSelf: 'center',
  px: 25,
  py: 1,
  backgroundColor: '#000',
  borderRadius: 10,
  mt: 10,
};
