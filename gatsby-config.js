/*module.exports = {
  siteMetadata: {
      title: `Juan Di Donato`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};*/

module.exports = {
  siteMetadata: {
    title: `Juan Di Donato`,
  siteUrl: `https://juandidonato.github.io/juan-di-donato/`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
  pathPrefix: "/juan-di-donato",
}
