module.exports = function(api) {
  plugins: [
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env"
      }
    ]
  ],
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

