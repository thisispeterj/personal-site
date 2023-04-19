import * as React from 'react'
import Layout from '../../layouts'
import Seo from '../../components/seo'

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="container is-max-desktop">
        <h1 className="title is-1">My Projects</h1>
      </section>{' '}
    </Layout>
  )
}

export const Head = () => <Seo title="My Projects" />

export default ProjectsPage
