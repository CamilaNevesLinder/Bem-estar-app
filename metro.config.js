const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);
const { transformer, resolver } = config;

const sourceExts = [...resolver.sourceExts, 'mjs', 'svg'];

config.transformer.unstable_allowRequireContext = true;
config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts?.filter((ext) => ext !== 'svg'),
  sourceExts,
};

module.exports = withNativeWind(config, {
  input: './global.css',
  inlineRem: 16,
});
