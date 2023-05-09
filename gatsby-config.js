module.exports = {
  siteMetadata: {
    title: `Peters-Portfolio`,
    description: `My personal website and portfolio. Includes an About me page, work experience, projects, and a contact form along with links to the socails.`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'blurred',
          quality: 80,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/assets/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-7GWY4W5SL2', // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
  ],
}
