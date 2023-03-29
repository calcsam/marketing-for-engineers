/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Technical Marketing For Engineers`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-C170X38Z2S"
    }
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
  ]
};