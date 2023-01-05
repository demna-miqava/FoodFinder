module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src',
          '@api': './src/api',
          '@images': './src/assets/images',
          '@icons': './src/assets/icons',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@redux': './src/redux',
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@type': './src/types',
          '@features': './src/features',
        },
      },
    ],
  ],
};
