module.exports = {
  siteMetadata: {
    title: `Gatsby Demo Simple Authentication`,
  },
  plugins: [`gatsby-plugin-react-helmet`, 'gatsby-plugin-image', 'gatsby-plugin-offline','gatsby-plugin-client-side-redirect', 
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Gatsby client-side routing only`,
      short_name: `client-side routing`,
      start_url: `/`, 
      icon:'./src/images/logo.png',
      display: `minimal-ui`
    }
  },
//  {
//       resolve: `gatsby-plugin-create-client-paths`,
//       options: { prefixes: [`/*`] }
//     }
  ],
}
