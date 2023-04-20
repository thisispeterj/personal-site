import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../layouts'
import Seo from '../../components/seo'

const ProjectsPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <section className="container is-max-desktop">
        <p>{data.mdx.frontmatter.date}</p>
        {children}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = () => <Seo title="Project post!" />

export default ProjectsPost
