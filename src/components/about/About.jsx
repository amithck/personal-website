import React from 'react'
import './about.css'
import {MdOutlineComputer} from 'react-icons/md'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {BiBookOpen} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
        <div className="about__content">
          <div className="about__cards">
          <article className='about__card'>
              <BiBookOpen className='about__icon'/>
              <h5>Education</h5>
              <small>Studied Computer Science and Engineering at <br/> Bangalore Institute of Techonolgy with CGPA 8.28</small>
            </article>
            <article className='about__card'>
              <MdOutlineComputer className='about__icon'/>
              <h5>Programming</h5>
              <small>Backend Developer with projects in C and Python</small>
            </article>
            <article className='about__card'>
              <BsMusicNoteBeamed className='about__icon'/>
              <h5>Music</h5>
              <small>Pianist and Harmonicist. President of the College<br/> Music Club.</small>
            </article>
          </div>
          <p>
            A budding computer science engineer with an interest in cyber security and machine learning. Seeking to challenge and cultivate his skills in a way as to advance the development and growth of the organization as well as field of work.
          </p>
          <a href="#contact" className='btn btn'>Contact Me</a>
        </div>
    </section>
  )
}

export default About