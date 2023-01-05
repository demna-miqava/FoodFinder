import React from 'react';
import {Image as NativeImage, ImageResizeMode} from 'react-native';
import FastImage from 'react-native-fast-image';

interface CustomImageProps {
  source: any;
  style: any;
  resizeMode?: ImageResizeMode;
}

export const Image = ({source, style, resizeMode}: CustomImageProps) => {
  return (source as any).uri ? (
    <FastImage
      style={style}
      source={{
        uri: source.uri,
        priority: FastImage.priority.normal,
        cache: FastImage.cacheControl.immutable,
      }}
      resizeMode={(resizeMode as any) || FastImage.resizeMode.cover}
    />
  ) : (
    <NativeImage source={source} resizeMode={resizeMode} style={style} />
  );
};
