import {Platform} from 'react-native';

export * from './storage';
export * from './user.storage';

export const isPlatform = (platform: string) => {
  return Platform.OS === platform;
};
