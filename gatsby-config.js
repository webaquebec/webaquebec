require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Le Web à Québec',
    description:
      'Le plus grand événement numérique francophone en Amérique du Nord.',
    siteUrl: 'https://webaquebec.org',
    image: '',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KHD8ZJR',
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-20043510-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // Enable ip anonymization
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
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/Layout.jsx`),
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Le Web à Québec',
        short_name: 'WAQ',
        start_url: '/',
        background_color: '#000CA0',
        theme_color: '#000CA0',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/icon-waq21.png', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    `gatsby-plugin-graphql-loader`,
    {
      /**
       * The plugin that allows us to connect Gatsby to the Swapcard API
       */
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'Swapcard',
        fieldName: 'swapcard',
        url: process.env.SWAPCARD_GRAPHQL_ENDPOINT,
        headers: {
          Authorization: process.env.SWAPCARD_API_ACCESS_TOKEN,
        },
      },
    },
    {
      /**
       * FIXME: Added temporary to Local Plugins while waiting for an official fix
       * This plugin generates fileNodes in your graphQL schema
       * and add File type to it. You can now use gatsby-plugin-sharp and gatsby-transformer-sharp
       * in your GraphQL schema.
       * See https://www.gatsbyjs.com/plugins/gatsby-image-graphql-schema
       */
      resolve: 'gatsby-image-graphql-schema',
      options: {
        imageNames: ['Swapcard_Speaker.photoUrl'],
        schemaTypeName: 'Swapcard',
      },
    },
  ],
};
