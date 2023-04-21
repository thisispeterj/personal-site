import * as React from 'react'
import Layout from '../../layouts'
import Seo from '../../components/seo'
import '../../styles/global.scss'

const AboutPage = () => {
  return (
    <Layout>
      <section className="hero is-medium hero-background">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half has-text-white p-5 is-rounded">
                <p>
                  As a QA engineer I am dedicated to ensuring the highest
                  quality user experience possible. With a sharp eye for detail
                  and a passion for testing, I strive to catch any bugs or
                  glitches before they can impact the site's performance. My
                  goal is to deliver a seamless and enjoyable browsing
                  experience for every visitor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container is-max-desktop">
          <div className="content">
            <div className="columns p-6">
              <div className="column">
                <div className="block">
                  <p className="subtitle">Name:</p>
                </div>
                <div className="block">Peter Jacobs</div>
              </div>
              <div className="column">
                <div className="block">
                  <p className="subtitle">Email:</p>
                </div>
                <div className="block">thisispeterj@gmail.com</div>
              </div>
              <div className="column">
                <div className="block">
                  <p className="subtitle">Born:</p>
                </div>
                <div className="block">March 1985</div>
              </div>
              <div className="column">
                <div className="block">
                  <p className="subtitle">From:</p>
                </div>
                <div className="block">United Kingom | Wiltshire</div>
              </div>
              <div className="column">
                <div className="block">
                  <p className="subtitle">Living:</p>
                </div>
                <div className="block">United States | California</div>
              </div>
              <div className="column">
                <div className="block">
                  <p className="subtitle">Availability:</p>
                </div>
                <div className="block">
                  <strong>Available to Work</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <img
                alt="Peter Jacobs QA Engineer and Front End Developer"
                src="/assets/images/peter.jpg"
              />
            </div>
            <div className="column is-one-thirds">
              <div className="box ">
                <p>
                  As a QA engineer I am dedicated to ensuring the highest
                  quality user experience possible. With a sharp eye for detail
                  and a passion for testing, I strive to catch any bugs or
                  glitches before they can impact the site's performance. My
                  goal is to deliver a seamless and enjoyable browsing
                  experience for every visitor.
                </p>
                <ul>
                  <li>Name: Peter Jacobs</li>
                  <li>Email: thisispeterj@gmail.com</li>
                  <li>Born: March 1985</li>
                  <li>From: United Kingom</li>
                  <li>Living: United States | California</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  )
}

export const Head = () => <Seo title="About Me Page" />

export default AboutPage
