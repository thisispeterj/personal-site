import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useStaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
