import * as React from 'react'
import Layout from '../layouts/index'
import Seo from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Whoops!</h1>
    </Layout>
  )
}

export const Head = () => <Seo title="Not found" />

export default NotFoundPage
