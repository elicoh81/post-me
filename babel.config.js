module.exports = function (api) {
    api.cache(true);
  
    const presets = [];
    const plugins = ["jest-mock-external-components/babel"];
  
    return {
      presets,
      plugins
    };
  }