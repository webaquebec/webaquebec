module.exports = {
  siteMetadata: {
    title: 'Web à Québec',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      /**
       * A Gatsby plugin to handle cdn, base64 and self hosted webfonts
       * see https://www.gatsbyjs.com/plugins/gatsby-plugin-webfonts/?=gatsby-plugin-webfonts
       */
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'DM Sans',
              variants: ['400', '500', '700'],
              fontDisplay: 'swap',
              strategy: 'selfHosted', // 'base64' || 'cdn'
            },
          ],
        },
      },
    },
  ],
};
