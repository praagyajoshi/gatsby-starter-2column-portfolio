module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-7103855-1",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Gus Fune',
    description: 'Tech Lead',
    keywords: 'tehc lead, product manager, portfolio, personal website',
    url: 'https://gusfune.com'
  }
};
