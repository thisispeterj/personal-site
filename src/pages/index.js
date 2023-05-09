import * as React from 'react'
import Layout from '../layouts/'
import '../styles/global.scss'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'
import { graphql } from 'gatsby'

export const query = graphql`
  query {
    file(relativePath: { eq: "portrait.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const image = getImage(data.file)
  console.log(data.file)
  return (
    <Layout>
      <section className="hero home-primary has-text-grey-lighter">
        <div className="hero-head"></div>
        <div className="hero-body columns is-vcentered">
          <div className="column is-1">
            <ul>
              <li className="mb-5">
                <a href="https://github.com/thisispeterj">
                  <span className="icon fa-2xl has-text-grey-lighter">
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                </a>
              </li>
              <li className="mb-5">
                <a
                  href="https://www.linkedin.com/in/thisispeterj/"
                  className="is-link"
                >
                  <span className="icon fa-2xl has-text-grey-lighter shake">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                </a>
              </li>
              <li className="mb-5">
                <a href="https://codepen.io/thisispeterj" className="is-link">
                  <span className="icon fa-2xl has-text-grey-lighter shake">
                    <FontAwesomeIcon icon={faCodepen} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="column is-7 hero-title">
            <h1>
              Peter<span>Jacobs</span>
            </h1>
            <h2>QA Engineer / Front End Developer</h2>
          </div>
          <div className="column is-4">
            <GatsbyImage
              className="hero-portrait"
              image={image}
              alt="AI generated portrait of Peter Jacobs"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
