import * as React from 'react'
import Layout from '../layouts/'
import '../styles/global.scss'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'

const IndexPage = () => {
  return (
    <Layout>
      <section className="hero home-primary has-text-grey-lighter">
        <div className="hero-head"></div>
        <div className="hero-body columns is-vcentered">
          <div className="column is-1">
            <ul>
              <li className="mb-5">
                <a href="https://github.com/peterjweb/">
                  <span className="icon fa-2xl has-text-grey-lighter">
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                </a>
              </li>
              <li className="mb-5">
                <a
                  href="https://www.linkedin.com/in/peterjweb/"
                  className="is-link"
                >
                  <span className="icon fa-2xl has-text-grey-lighter shake">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                </a>
              </li>
              <li className="mb-5">
                <a href="https://codepen.io/peterjweb" className="is-link">
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
            <StaticImage
              className="hero-portrait"
              src="../../static/assets/images/portrait.jpg"
              alt="AI generated portrait of Peter Jacobs"
              placeholder="blurred"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
