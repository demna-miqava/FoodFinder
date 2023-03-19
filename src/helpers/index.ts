import Config from 'react-native-config';
import {Platform} from 'react-native';
import {mockImages} from '@app/api/restaurants/mock';
export * from './storage';
export * from './user.storage';

export const API_BASE_URL = Config.API_BASE_URL;
export const GOOGLE_API_BASE_URL = Config.GOOGLE_API_BASE_URL;
export const GOOGLE_API_KEY = Config.GOOGLE_API_KEY;

export const isPlatform = (platform: string) => {
  return Platform.OS === platform;
};

export const getUserInitials = (firstName: string, lastName: string) => {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
  return initials.toUpperCase();
};

export const getImageUrl = (reference: string) => {
  return reference
    ? `${GOOGLE_API_BASE_URL}/place/photo?maxwidth=400&photoreference=${reference}&key=${GOOGLE_API_KEY}`
    : mockImages[0];
};
