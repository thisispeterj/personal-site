import * as React from 'react'
import Layout from '../../layouts'
import { Container, Columns } from 'react-bulma-components'
import Scrollspy from 'react-scrollspy'
import Seo from '../../components/seo'

const workExperience = [
  {
    id: 1,
    company: 'EKA Solutions Inc.',
    title: 'Senior QA Engineer',
    description: 'Developed web applications using React and Node.js',
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
      <Container className="container is-max-desktop">
        <Columns>
          <Columns.Column size={3}>
            <Scrollspy
              items={workExperience.map((exp) => exp.id)}
              currentClassName="is-active"
            >
              {workExperience.map((exp) => (
                <li key={exp.id}>
                  <a onClick={() => handleMenuClick(exp.id)}>{exp.company}</a>
                </li>
              ))}
            </Scrollspy>
          </Columns.Column>
          <Columns.Column size={9}>
            <h1>{activeWorkExperience.company}</h1>
            <h2>{activeWorkExperience.title}</h2>
            <p>{activeWorkExperience.description}</p>
            <p>{activeWorkExperience.duration}</p>
            <ul>
              {activeWorkExperience.responsibilities.map((resp) => (
                <li key={resp}>{resp}</li>
              ))}
            </ul>
          </Columns.Column>
        </Columns>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="My Experience" />

export default ExperiencePage
