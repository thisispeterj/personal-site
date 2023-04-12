import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          &copy; {new Date().getFullYear()} | Peter Jacobs | QA Engineer |
          Frontend Developer
        </p>
      </div>
    </footer>
  )
}

export default Footer
