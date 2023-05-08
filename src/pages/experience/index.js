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
      'Worked as the lead tester for a React.js/PostgreSQL SAAS transportation management system (TMS)',
      'Conducted manual and automated testing for all stages of development and deployment: Local, Development instance, Staging instance, and finally smoke testing in production',
      'Attended weekly business meetings to assess upcoming stories and priorities',
      'Attended sprint planning to review all stories for upcoming sprint, using tools such as Jira to track all of our stories.',
      'Attended and led QA meetings to write test cases and discuss the priorities for the upcoming sprint',
      'Tested APIs from various integrations using tools SoapUI and Postman',
      'Used postico and SQL to manipulate',
      'Tracked and reported issues using Jira and assigned priority',
      'Maintained documentation for new and existing features',
      'Used Jenkins to monitor our pipeline',
    ],
  },
  {
    id: 2,
    company: 'Nventify Inc.',
    title: 'QA Engineer',
    description: 'Developed web applications using React and Node.js',
    duration: '2015 - 2017',
    responsibilities: [
      'Conducted manual and automated testing for all stages of development and deployment: Local, Development instance, Staging instance, and finally smoke testing in production',
      'Created automated tests using Cypress',
      'Tracked and reported issues using Jira',
      'Provided both phone and email support for customers',
    ],
  },
  {
    id: 3,
    company: 'Imageshack Inc.',
    title: 'QA Engineer / Customer Support',
    description: 'Developed web applications using React and Node.js',
    duration: 'Jan 2013 - 2015',
    responsibilities: [
      'Conducted manual and automated testing for all stages of development and deployment: Local, Development instance, Staging instance, and finally smoke testing in production',
      'Created automated tests using Cypress',
      'Tracked and reported issues using Jira',
      'Provided both phone and email support for customers',
      'Created a custom Zendesk help and support center',
      'Worked with CEO on increasing subscriptions, retention, and customer satisfaction',
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
