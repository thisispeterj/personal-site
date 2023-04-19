import * as React from 'react'
import Layout from '../../layouts'
import Seo from '../../components/seo'

const ContactPage = () => {
  return (
    <Layout>
      <section className="container is-max-desktop">
        <h1 className="title is-1">Contact Me</h1>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Me" />

export default ContactPage
