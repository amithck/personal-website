import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Amith</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/amithkowshik/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/amithck" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
      <a href="https://www.instagram.com/amith_kowshik/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
      </div>
    </footer>
  )
}

export default Footer