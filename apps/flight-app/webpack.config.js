const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const {share, SharedMappings} = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  ['@flight-workspace/shared/auth-lib'],
);

module.exports = {
  output: {
    uniqueName: 'flightApp',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        // 'dashboard': 'http://localhost:4200/remoteEntry.js',
        // 'external': 'http://localhost:4200/remoteEntry.js',
        // 'flightAdmin': 'http://localhost:4200/remoteEntry.js',
        // 'luggage': 'http://localhost:4200/remoteEntry.js',
        'passenger': 'passenger@http://localhost:3000/remoteEntry.js',
      },

      shared: share({
        '@angular/core': {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        '@angular/common': {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        '@angular/common/http': {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        '@angular/router': {singleton: true, strictVersion: true, requiredVersion: 'auto'},

        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin()
  ],
};
