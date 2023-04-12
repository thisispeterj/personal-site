import React from 'react'
import { Link } from 'gatsby-link'

const Navbar = () => {
  return (
    <nav
      className="navbar is-light is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <Link to="/" className="navbar-item">
          Peter Jacobs
        </Link>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <Link to="../about" className="navbar-item">
            About
          </Link>
          <Link to="../experience" className="navbar-item">
            Experience
          </Link>
          <Link to="../projects" className="navbar-item">
            Projects
          </Link>
          <Link to="../contact" className="navbar-item">
            Contact
          </Link>
          <Link to="../#" className="navbar-item button">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
