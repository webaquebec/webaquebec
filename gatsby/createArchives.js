const archiveProgram = require('./archiveProgram');

module.exports = async (gatsbyUtilities) => {
  await Promise.all([archiveProgram(gatsbyUtilities)]);
};
