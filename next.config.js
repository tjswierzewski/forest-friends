const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/styled-engine',
  '@mui/icons-material', // If @mui/icons-material is being used
]);

module.exports = withTM({
  images: { domains: ['forest-friends.s3.amazonaws.com'] },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
});
