import * as React from 'react'
import Layout from '../layouts/'
import '../styles/global.scss'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <section className="hero is-large">
        <div className="hero-body">
          <div className="container is-max-desktop">
            <p className="title is-1 is-spaced">Peter Jacobs</p>
            <p className="title is-4 is-spaced">
              QA Engineer and Front End Developer
            </p>
            <p className="subtitle is-5 is-spaced">
              As a QA engineer, my mission is to ensure the highest quality
              standards for web applications through rigorous testing
              methodologies, promoting continuous improvement, and maintaining a
              customer-centric approach. I also like to build things.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
