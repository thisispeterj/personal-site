import * as React from 'react'
import { useState, useEffect } from 'react'
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

const qaRoles = ['Test Automation', 'Manual Testing', 'Performance Testing']

export const query = graphql`
  query {
    file(relativePath: { eq: "peterportrait.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const image = getImage(data.file)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % qaRoles.length)
    }, 3000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <Layout>
      <section className="hero has-text-grey-darker is-fullheight">
        <div className="hero-head"></div>
        <div className="hero-body">
          <div className="columns">
            <div className="column is-1 is-flex is-justify-content-center is-align-items-center">
              <ul>
                <li className="mb-5">
                  <a href="https://github.com/thisispeterj">
                    <span className="icon fa-2xl has-text-grey-darker">
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                  </a>
                </li>
                <li className="mb-5">
                  <a
                    href="https://www.linkedin.com/in/thisispeterj/"
                    className="is-link"
                  >
                    <span className="icon fa-2xl has-text-grey-darker">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                  </a>
                </li>
                <li className="mb-5">
                  <a href="https://codepen.io/thisispeterj" className="is-link">
                    <span className="icon fa-2xl has-text-grey-darker">
                      <FontAwesomeIcon icon={faCodepen} />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="column is-7 hero-title">
              <h1 className="has-text-grey">
                PETER<span>JACOBS</span>
              </h1>
              <h2>QA Engineer</h2>
              <h2 key={currentRoleIndex} className="animated-role">
                {qaRoles[currentRoleIndex]}
              </h2>
            </div>
            <div className="column is-4">
              <GatsbyImage
                className="hero-portrait"
                image={image}
                alt="AI generated portrait of Peter Jacobs"
              />
            </div>
          </div>
        </div>
        <div className="hero-foot"></div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
