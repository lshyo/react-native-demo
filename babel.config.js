module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/utils': './src/utils',
          '@/components': './src/components',
          '@/models': './src/models',
          '@/navigator': './src/navigator',
          '@/pages': './src/pages',
          '@/assets': './src/assets',
        },
      },
    ],
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    ['transform-require-context'],
  ],
};
