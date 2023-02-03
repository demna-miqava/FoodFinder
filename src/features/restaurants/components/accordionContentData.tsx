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
        <Text>Classic Breakfast</Text>
      </ContentContainer>
    ),
    icon: 'local-cafe',
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
    icon: 'lunch-dining',
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
    icon: 'dinner-dining',
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
    icon: 'wine-bar',
    iconSize: 20,
  },
];
