module.exports = {
  siteMetadata: {
    title: 'Le Web à Québec',
    description:
      'Le plus grand événement numérique francophone en Amérique du Nord.',
    siteUrl: 'https://www.webaquebec.org',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KHD8ZJR',
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-20043510-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '758649984324647',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
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
    `gatsby-plugin-sitemap`,
  ],
};
