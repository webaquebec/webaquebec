/* eslint-env node, commonjs */
const createRedirects = require('./createRedirects');
const createProgramSessionPages = require('./createProgramSessionPages');

module.exports = async (gatsbyUtilities) => {
  await Promise.all([
    createRedirects(gatsbyUtilities),
    createProgramSessionPages(gatsbyUtilities),
  ]);
};
