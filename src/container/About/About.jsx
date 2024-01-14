import React from 'react'
import './About.css';
import { Mybutton } from '../../constants';
import { images } from '../../constants';

const About = () => {
  return (
    <section className='About' id='About'>
      <header>
      <div className="heading">
        <h1>Hi, I'm Perarulalan</h1>
        <h2>Data Science Enthusiast</h2>
      </div>
      <div className='content'>
      <p>Welcome to my corner of the digital world! I'm a passionate learner and technology enthusiast with a 
        focus on Artificial Intelligence, Data Science, and Full-Stack Development.</p>
      </div>
      <div className="btn">
      <Mybutton />
      </div>
      <div className='pg'>
        <img src={images.programmer} alt="img-content" id='pg-img'/>
      </div>
      </header>
    </section>  
  );
};

export default About