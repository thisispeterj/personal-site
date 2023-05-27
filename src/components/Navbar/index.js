import React, { useState } from 'react'
import { Link } from 'gatsby-link'
import Resumebtn from '../Resumebtn'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className="navbar container is-max-desktop">
      <div className="navbar-brand">
        <Link to="/" id="navbar-logo" className="navbar-item is-size-1">
          thisispeterj
        </Link>
        <a
          role="button"
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={handleToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-end">
        <div
          id="navMenu"
          className={`has-text-grey-darker navbar-menu navMenu ${
            isActive ? 'is-active' : 'is-hidden-mobile'
          }`}
        >
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
