import {Input} from 'native-base';
import React from 'react';
import {SearchIcon} from '../../assets/icons';
import {spaces} from '../../theme';

type Props = {
  label: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  icon: React.ReactElement;
};

export const SearchBar = ({label, onChange, icon = <SearchIcon />}: Props) => {
  return (
    <Input
      onChangeText={onChange}
      placeholder={label}
      width="100%"
      borderRadius={spaces[3]}
      py={3}
      px={1}
      fontSize="caption"
      InputLeftElement={icon}
    />
  );
};
