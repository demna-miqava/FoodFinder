import {SvgIconProps} from '@type/';
import React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = (props: SvgIconProps) => {
  const {width = 24, height = 24} = props;
  return `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
  <svg fill="#000000" width="${width}" height="${height}" viewBox="0 0 24 24" id="maps-location" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><path id="secondary" d="M19.32,9.84a1,1,0,0,0-1-.84H15.69A16.41,16.41,0,0,1,12,15,16.41,16.41,0,0,1,8.31,9H5.67a1,1,0,0,0-1,.84L3,19.84A1,1,0,0,0,4,21H20a1,1,0,0,0,1-1.16Z" style="fill: rgb(44, 169, 188); stroke-width: 2;"></path><path id="primary" d="M16,9h2.33a1,1,0,0,1,1,.84l1.67,10A1,1,0,0,1,20,21H4a1,1,0,0,1-1-1.16l1.67-10a1,1,0,0,1,1-.84H8" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path id="primary-2" data-name="primary" d="M16,7A4,4,0,0,0,8,7c0,4,4,8,4,8S16,11,16,7Z" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>`;
};

export const MapsIcon = (props: SvgIconProps) => <SvgCss xml={xml(props)} />;
