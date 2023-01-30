import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View} from 'native-base';
import Accordion from 'react-native-collapsible/Accordion';
import {Text} from '../Typography';

interface Content {
  title: string;
  content: React.ReactElement;
}

type Props = {
  content: Content[];
};

export const AccordionComponent = ({content}: Props) => {
  const [activeSections, setActiveSections] = useState<number[] | string[]>([]);

  const setSections = (sections: number[]) => {
    setActiveSections(sections);
  };

  const renderHeader = (section: Content) => {
    return (
      <View>
        <Text>{section.title}</Text>
      </View>
    );
  };

  const renderContent = (section: Content) => {
    return <View>{section.content}</View>;
  };
  return (
    <View>
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
