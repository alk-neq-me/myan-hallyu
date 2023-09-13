module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        root: ["."],
        alias: {
          "@": "./src",
          "@data": "./src/lib/storage/data",
          "@assets": "./assets/img"
        }
      }]
    ]
  };
};
