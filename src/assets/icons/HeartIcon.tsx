import React from 'react';
import {SvgCss} from 'react-native-svg';
import {SvgIconProps} from 'src/types/svg.types';

const xml = (props: SvgIconProps) => {
  const {width = 16, fill = 'gray', bgFill = 'white', height = 16} = props;
  return `
		<svg
			width="${width}"
			height="${height}"
			viewBox="0 0 12 12"
			fill="${bgFill}"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1.5 6.00031C0.375 4.50031 0.75 2.25031 2.625 1.50031C4.5 0.750305 5.625 2.25031 6 3.00031C6.375 2.25031 7.875 0.750305 9.75 1.50031C11.625 2.25031 11.625 4.50031 10.5 6.00031C9.375 7.50031 6 10.5003 6 10.5003C6 10.5003 2.625 7.50031 1.5 6.00031Z"
				stroke="${fill}"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
     `;
};

export const HeartIcon = (props: SvgIconProps) => <SvgCss xml={xml(props)} />;
