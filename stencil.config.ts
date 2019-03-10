import { Config } from '@stencil/core';

export const config: Config = {

  namespace: 'mycounter',

  srcDir: 'src',

  bundles: [
    { components: ['my-counter'] }
  ],

  devServer: {
    openBrowser: true
  },

  outputTargets: [
    { type: 'www'},
    { type: 'dist' }
  ]
};
