import Config from 'react-native-config';
import {Platform} from 'react-native';
export * from './storage';
export * from './user.storage';

export const API_BASE_URL = Config.API_BASE_URL;
export const GOOGLE_API_BASE_URL = Config.GOOGLE_API_BASE_URL;

export const isPlatform = (platform: string) => {
  return Platform.OS === platform;
};

export const getUserInitials = (firstName: string, lastName: string) => {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
  return initials.toUpperCase();
};
