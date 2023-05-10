import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../layouts'
import Seo from '../../components/seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faNodeJs,
  faCss3,
  faJs,
  faHtml5,
  faSass,
  faCodepen,
  faJenkins,
} from '@fortawesome/free-brands-svg-icons'

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <section className="container is-max-desktop p-6">
        <h1 className="title is-1">My Projects</h1>
        {/* <div className="tile-container columns is-multiline">
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
        </div> */}

        <div className="card-container">
          <div className="card">
            <div className="imgplaceholder"></div>
            <div className="card-body">
              <div className="title">
                <h3>Coming Soon!</h3>
              </div>
              <div className="excerpt">
                <p>The first project will be available soon...</p>
              </div>
              <div className="tech-container">
                <div className="tech fa-2xl">
                  <FontAwesomeIcon icon={faReact} />
                </div>
                <div className="tech fa-2xl">
                  <FontAwesomeIcon icon={faNodeJs} />
                </div>
                <div className="tech fa-2xl">
                  <FontAwesomeIcon icon={faCss3} />
                </div>
                <div className="tech fa-2xl">
                  <FontAwesomeIcon icon={faJs} />
                </div>
              </div>
            </div>
          </div>
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
