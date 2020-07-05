require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Define site URL here
let URL;
if (process.env.NODE_ENV === 'production') {
  URL = 'https://aquasar.io';
} else {
  URL = 'http://localhost:8000';
}

const queries = require('./src/utils/algolia');

module.exports = {
  siteMetadata: {
    title: 'Aquasar Inc - Helping Businesses Grow Online',
    titleTemplate: 'Web Development SEO and Digital Ads in Edmonton Alberta',
    description:
      'Aquasar Inc is a web development, SEO and digital Ads consulting company in Edmonton, AB. We help businesses grow online to reach and exceed their business goals',
    author: 'Alex Quasar',
    twitterUsername: '@_aquasar',
    image: '/default.png',
    url: URL,
    siteUrl: URL,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-emotion`,
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:100,300,500,700`,
          `Helvetica\:100,300,500,700`,
          `Roboto\:100,300,500,700`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `gatsbyjs`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-stripe`,
    // },
    // {
    //   resolve: `gatsby-source-stripe`,
    //   options: {
    //     objects: [
    //       'Balance',
    //       'BalanceTransaction',
    //       'Product',
    //       'ApplicationFee',
    //       'Sku',
    //       'Subscription',
    //     ],
    //     secretKey: process.env.STRIPE_SECRET_KEY,
    //     downloadFiles: true,
    //   },
    // },
    `gatsby-plugin-twitter`,
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            "Content-Security-Policy: frame-ancestors 'self' https://*.public.tableau.com/",
            'X-Frame-Options: ALLOW-FROM https://public.tableau.com/',
          ],
        },
        mergeSecurityHeaders: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        // head: false,
        // // Setting this parameter is optional
        // anonymize: true,
        // // Setting this parameter is also optional
        // respectDNT: true,
        // // Avoids sending pageview hits from custom paths
        // exclude: ['/preview/**', '/do-not-track/me/too/'],
        // // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // // Enables Google Optimize using your container Id
        // // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // // Enables Google Optimize Experiment ID
        // // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // // Set Variation ID. 0 for original 1,2,3....
        // // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: 'aquasar.io',
      },
    },
  ],
};
