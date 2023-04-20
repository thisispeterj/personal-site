import React, { useState } from 'react'
import { Link } from 'gatsby-link'
import Resumebtn from '../Resumebtn'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Peter Jacobs
        </Link>
        <Link>
          <a
            role="button"
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </Link>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
      >
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
          <Link className="navbar-item">
            <Resumebtn />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
