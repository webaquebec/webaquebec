require('dotenv').config({
  path: `.env`,
});

const inProduction = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: 'Web à Québec',
    description:
      'Le plus grand événement numérique francophone en Amérique du Nord.',
    siteUrl: 'https://webaquebec.org',
    image: '/og-img-waq-24.jpg',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GTM_ID,
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        // Datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GTAG_ID],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // Enable ip anonymization
          anonymize_ip: true,
          // cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: inProduction && process.env.FACEBOOK_PIXEL_ID,
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/archives/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: !inProduction,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Web à Québec',
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
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `${process.env.WP_API_URL}/graphql`,
        verbose: true,
        schema: {
          perPage: 100,
          // requestConcurrency: 1,
          // previewRequestConcurrency: 1,
          timeout: 120000,
        },
        searchAndReplace: [
          {
            search: '/app/uploads',
            replace: '/wp-content/uploads',
          },
          // {
          //   search: process.env.WP_API_BASE_URL,
          //   replace: process.env.URL,
          // },
        ],
        html: {
          useGatsbyImage: true,
          imageQuality: 99,
          fallbackImageMaxWidth: 1200,
          createStaticFiles: true,
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
