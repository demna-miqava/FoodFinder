import React from 'react';
import {Box, FormControl, Input} from 'native-base';
import {Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';

interface CustomInputProps {
  name: string;
  errors: any;
  control: any;
  label: string;
  type?: 'text' | 'password';
}

export const CustomInput = ({
  control,
  name,
  errors,
  label,
  type = 'text',
}: CustomInputProps) => {
  const {t} = useTranslation();
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}}) => {
        return (
          <FormControl
            isInvalid={!!(errors && errors[name]?.message)}
            position="relative">
            <Box borderRadius={8}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}>
                {label}
              </FormControl.Label>
              <Input
                value={value}
                onChangeText={onChange}
                type={type}
                borderRadius={15}
              />
            </Box>
            <FormControl.ErrorMessage
              _text={{
                bold: true,
              }}>
              {errors && t(errors[name]?.message || '')}
            </FormControl.ErrorMessage>
          </FormControl>
        );
      }}
    />
  );
};
