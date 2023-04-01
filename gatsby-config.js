/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Marketing For Engineers`,
    siteUrl: `https://www.marketingforengineers.io`
  },
  plugins: [
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingId: "G-C170X38Z2S", // Google Analytics / GA
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  },
  'gatsby-plugin-postcss',
  `gatsby-plugin-netlify`,
  `gatsby-plugin-mdx`,
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `pages`,
         path: `${__dirname}/src/pages`,
       },
     },
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
     `gatsby-transformer-remark`,
     {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `d3k0xchf`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    `gatsby-plugin-image`,
  ]
};