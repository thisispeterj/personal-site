import React from 'react'

const Resumebtn = () => {
  const handleResumeClick = () => {
    window.open('/assets/resume/resume.pdf', '_blank')
  }

  return (
    <button
      className="button is-primary is-light is-small"
      onClick={handleResumeClick}
    >
      <strong>Resume</strong>
    </button>
  )
}

export default Resumebtn
