// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = require('./gatsby/createPages');

/**
 * exports.onPostBuild is called after all other parts of the build process are complete
 *
 * See https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onPluginInit for more info
 *
 * At this stage, we can get a last snapshot of our data from any API endpoints
 * and export them as JSON files.
 *
 * Uncomment ONLY when needed.
 *
 */
// exports.onPostBuild = require('./gatsby/createArchives');

/**
 * FIXME: Temporary hack to fix issue with WPGraphQL Gutenberg plugin that crashes the build
 * https://github.com/wp-graphql/wp-graphql/issues/1460#issuecomment-742235504
 *
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type WpBlockAttributesObject {
      foobar: String
    }
  `;
  createTypes(typeDefs);
};

/**
 * Fix for making mapbox-gl works with gatsby in production
 * https://docs.mapbox.com/mapbox-gl-js/guides/install/#transpiling
 *
 */
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /@mapbox/,
//             use: loaders.null(),
//           },
//           {
//             test: /mapbox-gl/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     });
//   }
// };
