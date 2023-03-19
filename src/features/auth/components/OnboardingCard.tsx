import React from 'react';
import {useTheme} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@components/Button';
import {ThemeType} from '@app/theme';

interface Props {
  text: string;
  navigateTo: string;
}

export const OnboardingCard = ({text, navigateTo}: Props) => {
  const navigation = useNavigation<any>();
  const theme = useTheme();
  return (
    <Button
      styles={btnStylesCreator(theme)}
      onPress={() => navigation.navigate(navigateTo)}
      text={text}
    />
  );
};

const btnStylesCreator = (theme: ThemeType) => ({
  py: theme.space[3],
  px: theme.space[4],
  borderRadius: theme.space[3],
});
