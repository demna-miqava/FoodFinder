import React from 'react';
import {ScrollView} from 'native-base';
import {SpacerComponent} from '@app/components/Spacer';

type ScrollViewWithBottomSpaceProps = {
  children: React.ReactNode;
  showsHorizontalScrollIndicator: boolean;
  showsVerticalScrollIndicator: boolean;
  bounces: boolean;
  bottomMargin: number | string;
};

export const ScrollViewWithBottomSpace = ({
  children,
  showsHorizontalScrollIndicator,
  showsVerticalScrollIndicator,
  bounces = false,
  bottomMargin = 30,
}: ScrollViewWithBottomSpaceProps) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      bounces={bounces}>
      {children}
      <SpacerComponent height={bottomMargin} />
    </ScrollView>
  );
};
