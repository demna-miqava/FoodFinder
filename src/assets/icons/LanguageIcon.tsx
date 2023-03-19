import React from 'react';
import {SvgIconProps} from '@type/';
import {SvgCss} from 'react-native-svg';

const xml = (props: SvgIconProps) => {
  const {width = 16, height = 16} = props;
  return ` <?xml version="1.0" encoding="utf-8"?>
  <svg width="${width}" height="${height}" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><path d="M34.53,14.59s-1.6,18.21-24,32.78" stroke-linecap="round"/><line x1="7.35" y1="14.59" x2="41.46" y2="14.59" stroke-linecap="round"/><line x1="24.4" y1="9.08" x2="24.4" y2="14.59" stroke-linecap="round"/><path d="M16.76,22.05S25.2,36.8,32,41.33" stroke-linecap="round"/><path d="M33.55,54.92l10.74-25a.89.89,0,0,1,1.63,0l10.73,25" stroke-linecap="round"/><line x1="37.25" y1="46.3" x2="52.96" y2="46.3" stroke-linecap="round"/></svg>`;
};

export const LanguageIcon = (props: SvgIconProps) => (
  <SvgCss xml={xml(props)} />
);
