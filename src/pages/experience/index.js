import * as React from 'react'
import Layout from '../../layouts'
import Scrollspy from 'react-scrollspy'
import Seo from '../../components/seo'
import '../../styles/global.scss'

const workExperience = [
  {
    id: 1,
    company: 'EKA Solutions Inc.',
    title: 'Senior QA Engineer',
    description:
      'As the Senior QA Engineer I coordinated with the business, developer, and QA teams.',
    duration: '2017 - 2022',
    responsibilities: [
      'Created automated tests using Cypress',
      'Performed manual testing for new features',
      'Collaborated with developers to identify and resolve issues',
    ],
  },
  {
    id: 2,
    company: 'Nventify Inc.',
    title: 'QA Engineer',
    description: 'Developed web applications using React and Node.js',
    duration: '2015 - 2016',
    responsibilities: [
      'Created automated tests using Cypress',
      'Performed manual testing for new features',
      'Collaborated with developers to identify and resolve issues',
    ],
  },
  {
    id: 3,
    company: 'Imageshack Inc.',
    title: 'QA Engineer',
    description: 'Developed web applications using React and Node.js',
    duration: 'Jan 2013 - 2015',
    responsibilities: [
      'Created automated tests using Cypress',
      'Performed manual testing for new features',
      'Collaborated with developers to identify and resolve issues',
    ],
  },
]

const ExperiencePage = () => {
  const [activeCompany, setActiveCompany] = React.useState(workExperience[0].id)

  const handleMenuClick = (id) => {
    setActiveCompany(id)
  }

  const activeWorkExperience = workExperience.find(
    (exp) => exp.id === activeCompany
  )

  return (
    <Layout>
      <section className="hero is-large p-6">
        <div className="hero-head">
          <h1 className="title is-1 has-text-centered">Work Experience</h1>
          <div className="container box is-max-desktop">
            <div className="columns">
              <div className="column is-one-quarter">
                <Scrollspy
                  items={workExperience.map((exp) => exp.id)}
                  currentClassName="is-active"
                >
                  {workExperience.map((exp) => (
                    <li
                      className="button is-primary is-fullwidth mb-3"
                      key={exp.id}
                    >
                      <a
                        className="has-text-white"
                        onClick={() => handleMenuClick(exp.id)}
                      >
                        {exp.company}
                      </a>
                    </li>
                  ))}
                </Scrollspy>
              </div>
              <div className="column is-three-quarters">
                <h3 className="mb-2">
                  <span className="subtitle">Company: </span>
                  {activeWorkExperience.company}
                </h3>
                <h3 className="mb-2">
                  <span className="subtitle">Title: </span>
                  {activeWorkExperience.title}
                </h3>
                <h3 className="mb-2">
                  <span className="subtitle">Description: </span>
                  {activeWorkExperience.description}
                </h3>
                <h3 className="mb-2">
                  <span className="subtitle">Date: </span>
                  {activeWorkExperience.duration}
                </h3>
                <ul>
                  {activeWorkExperience.responsibilities.map((resp) => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot"></div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="My Experience" />

export default ExperiencePage
