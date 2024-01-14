import React from 'react'
import './Contact.css'
import { images } from '../../constants';


const Contact = () => {
  return (
    <section className='Contact' id='Contact'>
      <h1 className='ct'>Contact</h1>
      <h1 className='ct'>Connect with me</h1>
      <div className='social-media'>
        <a href="https://github.com/perarulalan15"><img src={images.github} alt="github" id='github'/></a>
        <a href="https://www.linkedin.com/in/perarulalan15/"><img src={images.linkedin} alt="linkedin" id='linkedin' /></a>
        <a href="mailto:perarulalan01@gmail.com"><img src={images.gmail} alt="gmail" id='gmail' /></a>
      </div>
    </section>
  )
}

export default Contact