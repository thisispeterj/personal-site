import React from 'react'

const Resumebtn = () => {
  const handleResumeClick = () => {
    window.open('/assets/resume/resume.pdf', '_blank')
  }

  return (
    <button className="navbar-item button" onClick={handleResumeClick}>
      Resume
    </button>
  )
}

export default Resumebtn
