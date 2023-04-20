import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../layouts'
import Seo from '../../components/seo'

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <section className="container is-max-desktop">
        <h1 className="title is-1">My Projects</h1>
        <div className="tile-container columns is-multiline">
          {data.allMdx.nodes.map((node) => (
            <article
              key={node.id}
              className="tile is-child column is-6-tablet is-6-desktop"
            >
              <div className="box">
                <h3 className="title">
                  <Link to={`/projects/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h3>
                <p>Posted: {node.frontmatter.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Projects" />

export default ProjectsPage
