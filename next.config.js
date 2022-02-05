const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/styled-engine',
  '@mui/icons-material', // If @mui/icons-material is being used
]);

module.exports = withTM({
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
});
