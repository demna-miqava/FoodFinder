import {SvgIconProps} from '@type/';
import React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = (props: SvgIconProps) => {
  const {width = 24, height = 24} = props;
  return `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
  <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="style=doutone" clip-path="url(#clip0_1_201)">
  <g id="home-smile">
  <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M9.53099 2.16334C10.9447 0.92667 13.0553 0.926673 14.469 2.16335L21.1274 7.98786C22.1585 8.88984 22.75 10.1931 22.75 11.563V20C22.75 22.0711 21.0711 23.75 19 23.75H5C2.92893 23.75 1.25 22.0711 1.25 20V11.563C1.25 10.1931 1.84148 8.88984 2.87259 7.98786L9.53099 2.16334ZM13.4814 3.29234C12.6332 2.55034 11.3668 2.55034 10.5186 3.29234L3.86019 9.11686C3.15469 9.734 2.75 10.6257 2.75 11.563V20C2.75 21.2426 3.75736 22.25 5 22.25H19C20.2426 22.25 21.25 21.2426 21.25 20V11.563C21.25 10.6257 20.8453 9.734 20.1398 9.11686L13.4814 3.29234Z" fill="#000000"/>
  <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M7.16229 14.4695C7.53638 14.2916 7.98381 14.4507 8.16166 14.8248C8.50682 15.5508 9.05083 16.1641 9.73052 16.5933C10.4102 17.0226 11.1977 17.2503 12.0016 17.25C12.8055 17.2497 13.5929 17.0214 14.2722 16.5916C14.9516 16.1618 15.4951 15.5481 15.8397 14.8218C16.0173 14.4476 16.4646 14.2881 16.8388 14.4657C17.213 14.6432 17.3725 15.0905 17.1949 15.4648C16.7287 16.4474 15.9933 17.2777 15.0742 17.8592C14.1551 18.4407 13.0899 18.7496 12.0022 18.75C10.9146 18.7504 9.84913 18.4424 8.92954 17.8616C8.00995 17.2808 7.27394 16.4511 6.80696 15.4688C6.62911 15.0947 6.7882 14.6473 7.16229 14.4695Z" fill="#BFBFBF"/>
  </g>
  </g>
  <defs>
  <clipPath id="clip0_1_201">
  <rect width="24" height="24" fill="white" transform="translate(0 24) rotate(-90)"/>
  </clipPath>
  </defs>
  </svg>`;
};

export const HomeIcon = (props: SvgIconProps) => <SvgCss xml={xml(props)} />;
