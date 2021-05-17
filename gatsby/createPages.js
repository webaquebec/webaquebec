/* eslint-env node, commonjs */
const createRedirects = require('./createRedirects');

module.exports = async (pluginOptions) => {
  await Promise.all([createRedirects(pluginOptions)]);
};
