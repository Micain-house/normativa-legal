import React from 'react'
import './About.css'
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className='about'>About
    <Helmet>
        <title>Acerca de - Mi Aplicación</title>
        <meta name="description" content="Más información sobre mi aplicación." />
      </Helmet>
    </div>
  )
}

export default About