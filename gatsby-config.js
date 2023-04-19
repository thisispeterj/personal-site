module.exports = {
  siteMetadata: {
    title: `peters-portfolio`,
    description: `My personal website and portfolio. Includes an About me page, work experience, projects, and a contact form along with links to the socails.`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `projects`,
        path: `${__dirname}/src/pages/projects`,
      },
    },
  ],
}
