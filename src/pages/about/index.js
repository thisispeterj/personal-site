import * as React from 'react'
import Layout from '../../layouts'
import Seo from '../../components/seo'

const AboutPage = () => {
  return (
    <Layout>
      <section className="container is-max-desktop">
        <h1 className="title is-1">About Page</h1>
        <div className="columns">
          <div className="column is-two-thirds">
            <p>
              Welcome to my portfolio website! My name is Peter Jacobs, and I am
              a QA Engineer with a passion for manual and automated testing.
              Originally from England, I've been living and working in the San
              Francisco Bay Area for over two decades. With experience in a
              variety of technologies including HTML, CSS, Sass, JavaScript,
              Node, React, Selenium, SQL, and Cypress. I have honed my skills in
              both manual and automated testing. Throughout my career, I have
              worked in agile environments, collaborating with cross-functional
              teams to ensure the highest level of quality assurance for
              software products. My dedication to quality assurance and
              attention to detail have led to numerous successes in my career,
              including improving testing processes, identifying and resolving
              issues before release, and delivering high-quality software
              products that exceed customer expectations. In addition to my
              technical skills, I am a strong communicator, able to clearly
              articulate technical issues and work collaboratively with teams to
              ensure the best possible outcomes. I am passionate about
              continuing to learn and develop my skills, and I look forward to
              exploring new technologies and approaches in the field of QA.
              Thank you for visiting my website, and please feel free to reach
              out if you have any questions or would like to discuss a potential
              collaboration.
            </p>
          </div>
          <div className="column">
            <img
              alt="Peter Jacobs QA Engineer and Front End Developer"
              src="/assets/images/peter.jpg"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me Page" />

export default AboutPage
