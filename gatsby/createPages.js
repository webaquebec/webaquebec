/* eslint-env node, commonjs */
const createRedirects = require('./createRedirects');
const createProgramSessionPages = require('./createProgramSessionPages');
const createBlogPages = require('./createBlogPages');

module.exports = async (gatsbyUtilities) => {
  await Promise.all([
    createRedirects(gatsbyUtilities),
    createProgramSessionPages(gatsbyUtilities),
    createBlogPages(gatsbyUtilities),
  ]);
};
