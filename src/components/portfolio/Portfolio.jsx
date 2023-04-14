import React from 'react'
import './portfolio.css'
import file_management from '../../assets/file_management.png'
import car_lane from '../../assets/car_lane.jpg'
import rental_system from '../../assets/rental_system.png'
import keylogger from '../../assets/keylogger.png'

const data=[
  {
    id:1 ,
    image: file_management,
    title: 'File Management System with Search Engine',
    github: 'https://github.com/amithck/file_storage'
  },
  {
    id:2 ,
    image: car_lane,
    title: 'Car Lane Detector',
    github: 'https://github.com/amithck/car-lane-detector'
  },
  {
    id:3 ,
    image: rental_system,
    title: 'On-The-Go Renting Management System',
    github: 'https://github.com/amithck/On-The-Go-Rental-System'
  },
  {
    id:4 ,
    image: keylogger,
    title: 'Keylogger',
    github: 'https://github.com/amithck/keylogger'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio