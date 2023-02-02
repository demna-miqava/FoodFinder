import React from 'react';
import {Text} from '@components/Typography';
import {VStack} from 'native-base';

const ContentContainer = ({children}: {children: JSX.Element[]}) => {
  return (
    <VStack space={0.5} px={'29px'}>
      {children}
    </VStack>
  );
};

export const accordionContentData = [
  {
    title: 'Breakfast',
    content: (
      <ContentContainer>
        <Text>Eggs Benedict</Text>
        <Text>ClassicBreakfast</Text>
      </ContentContainer>
    ),
    icon: 'cafe-sharp',
    iconSize: 20,
  },
  {
    title: 'Lunch',
    content: (
      <ContentContainer>
        <Text>Burger w/ Fries</Text>
        <Text>Steak Sandwich</Text>
      </ContentContainer>
    ),
    icon: 'md-wine-outline',
    iconSize: 20,
  },
  {
    title: 'Dinner',
    content: (
      <ContentContainer>
        <Text>Spaghetti Bolognese</Text>
        <Text>Veal Cutlet with Chicken Mushroom Rotini</Text>
        <Text>Steak Frites</Text>
      </ContentContainer>
    ),
    icon: 'md-wine-outline',
    iconSize: 20,
  },
  {
    title: 'Drinks',
    content: (
      <ContentContainer>
        <Text>Coffee</Text>
        <Text>Tea</Text>
        <Text>Modelo</Text>
        <Text>Coke</Text>
      </ContentContainer>
    ),
    icon: 'md-wine-outline',
    iconSize: 20,
  },
];
