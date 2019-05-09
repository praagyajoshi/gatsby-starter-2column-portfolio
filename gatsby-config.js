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
    description: 'I\'m a highly technical Web & Mobile Product Manager who delivered over 100 products to scale.',
    keywords: 'tech lead, product manager, portfolio, personal website',
    url: 'https://gusfune.com'
  }
};
