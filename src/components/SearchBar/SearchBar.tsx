import {Input} from 'native-base';
import React from 'react';
import {SearchIcon} from '../../assets/icons';
import {spaces} from '../../theme';

type Props = {
  label: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar = ({label, onChange}: Props) => {
  return (
    <Input
      onChangeText={onChange}
      placeholder={label}
      width="100%"
      borderRadius={spaces[3]}
      py={3}
      fontSize="caption"
      InputLeftElement={<SearchIcon />}
    />
  );
};
