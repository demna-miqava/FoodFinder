import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {HStack, View} from 'native-base';
import Accordion from 'react-native-collapsible/Accordion';
import {Text} from '../Typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {spaces} from '@app/theme';

interface Content {
  title: string;
  content: React.ReactElement;
  icon: string;
  iconSize: number;
}

type Props = {
  content: Content[];
};

export const AccordionComponent = ({content}: Props) => {
  const [activeSections, setActiveSections] = useState<number[] | string[]>([]);

  const setSections = (sections: number[]) => {
    setActiveSections(sections);
  };

  const renderHeader = (
    {title, icon, iconSize}: Content,
    _: any,
    isActive: boolean,
  ) => {
    return (
      <HStack justifyContent="space-between" py={3}>
        <HStack space={2} alignItems="center">
          <Icon name={icon} size={iconSize} />
          <Text fontSize="body">{title}</Text>
        </HStack>
        <Icon
          name={isActive ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={iconSize}
        />
      </HStack>
    );
  };

  const renderContent = (section: Content) => {
    return <View>{section.content}</View>;
  };
  return (
    <View my={spaces[3]}>
      <Accordion
        align="bottom"
        activeSections={activeSections}
        sections={content}
        touchableComponent={TouchableOpacity}
        expandMultiple
        renderHeader={renderHeader}
        renderContent={renderContent}
        duration={500}
        onChange={setSections}
        renderAsFlatList={false}
      />
    </View>
  );
};
