require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
        includeInDevelopment: true,
      }
    }
  ],
  siteMetadata: {
    title: 'Gus Fune',
    description: 'I\'m a highly technical Web & Mobile Product Manager who delivered over 100 products to scale.',
    keywords: 'tech lead, product manager, portfolio, personal website',
    url: 'https://gusfune.com'
  }
};