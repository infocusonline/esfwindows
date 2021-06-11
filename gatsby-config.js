/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Esfwindows',
    author: 'Miguel',
  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-D256SSTSN7', // Google Analytics / GA
        ],

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          // respectDNT: true,
          // // Avoids sending pageview hits from custom paths
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },

    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'G-2TGZNHY4DPS',
    //     // this option places the tracking script into the head of the DOM
    //     head: true,
    //     anonymize: true,
    //   },

    // resolve: `gatsby-plugin-prefetch-google-fonts`,
    // options: {
    //   fonts: [
    //     {
    //       family: `Lora`,
    //       subsets: [`latin`],
    //     },
    //     {
    //       family: `Open Sans`,
    //       variants: [`400`, `700`],
    //     },
    //   ],
    // },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'https://test-esfwindows.pantheonsite.io/',
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },

    'gatsby-image',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: true,
            },

            resolve: `gatsby-remark-images-medium-zoom`,
          },
        ],
      },
    },
  ],
  /* Your site config here */
}
