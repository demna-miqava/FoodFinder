import {extendTheme} from 'native-base';

export const colors = {
  brand: {
    primary: '#2182BD',
    secondary: '#5282BD',
    muted: '#C6DAF7',
  },
  ui: {
    primary: '#262626',
    secondary: '#757575',
    tertiary: '#F1F1F1',
    quaternary: '#FFFFFF',
    disabled: '#DEDEDE',
    error: '#cc1616',
    success: '#138000',
    gray: '#808080',
    teal: '#008080',
  },
  bg: {
    primary: '#FFFFFF',
    secondary: '#F1F1F1',
  },
  text: {
    primary: '#262626',
    secondary: '#757575',
    disabled: '#9C9C9C',
    inverse: '#FFFFFF',
    error: '#D0421B',
    success: '#138000',
  },
};

export const fonts = {
  kalamBold: 'Kalam-Bold',
  kalamRegular: 'Kalam-Regular',
  kalamLight: 'Kalam-Light',
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 800,
};

export const fontSizes = {
  caption: 12,
  button: 14,
  body: 16,
  title: 20,
  h5: 24,
  h4: 34,
  h3: 45,
  h2: 56,
  h1: 112,
};

export const spaces = [0, 4, 8, 16, 32, 64];

export const sizes = [0, 4, 8, 16, 32, 64, 128];

export const theme = extendTheme({
  colors,
  fontSizes,
  space: spaces,
  sizes,
  fontConfig: fonts,
});

export type ThemeType = typeof theme;
