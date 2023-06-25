import React from 'react'
import Resume from '../../assets/Resume.pdf'
import Manual from '../../assets/manual.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
        <a href={Manual} download className='btn'>Lab Manual</a>
    </div>
  )
}

export default CTA