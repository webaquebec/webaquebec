const path = require(`path`);

/** This function queries Gatsby's GraphQL server and asks for
 *  all blog posts from the Wordpress API. If there are any GraphQL error it throws an error
 *  otherwise it will return blog posts found 🙌
 *
 *  We're passing in the utilities we got from createPages.
 *  So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
const getBlogPosts = async ({ graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpPost {
        edges {
          node {
            id
            uri
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error fetching blog posts from Wordpress`,
      result.errors
    );
    return;
  }

  const { allWpPost: { edges: posts = [] } = { edges: [] } } = result.data;

  // eslint-disable-next-line consistent-return
  return posts;
};

const createBlogPost = async ({ blogPosts, actions, reporter }) => {
  const { createPage } = actions;
  const template = path.resolve('src/templates/BlogPost/BlogPost.jsx');

  blogPosts.forEach(({ node }) => {
    const { id, uri } = node;

    reporter.info(`creating Blog post page: ${uri}`);

    createPage({
      path: uri,
      component: template,
      context: { id },
    });
  });
};

module.exports = async ({ graphql, actions, reporter }) => {
  reporter.info('start fetching data from Wordpress API');

  const blogPosts = await getBlogPosts({ graphql, reporter });

  if (!blogPosts.length) {
    reporter.info('No blog posts found.');
    return;
  }

  reporter.info(`total blog posts: ${blogPosts.length}`);

  await createBlogPost({ blogPosts, actions, reporter });
};
