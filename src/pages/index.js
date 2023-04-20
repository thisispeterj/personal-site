import * as React from 'react'
import Layout from '../layouts/'
import '../styles/global.scss'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-head"></div>
        <div className="hero-body columns is-vcentered">
          <div className="column is-three-fifths">
            <h1 className="title">Peter Jacobs</h1>
            <h2 className="title">QA Engineer and Front End Developer</h2>
            <p className="subtitle">
              As a QA engineer, my mission is to ensure the highest quality
              standards for web applications through rigorous testing
              methodologies, promoting continuous improvement, and maintaining a
              customer-centric approach. I also like to build things.
            </p>
          </div>
          <div className="column is-two-fifths">
            <img
              className="hero-portrait"
              src="/assets/images/portrait.jpg"
              alt="AI generated portrait of Peter Jacobs"
            />
          </div>
        </div>
        <div className="hero-foot"></div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
