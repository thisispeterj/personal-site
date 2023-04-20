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
  ],
}
