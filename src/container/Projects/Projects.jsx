import React from 'react'
import './Projects.css'


const Projects = () => {
  return (
    <section className='Project_section' id='Projects'>
    <h1 className='pt-hd'>Projects</h1>
    <h2 className='pt-hs'> A Playground of Possibilities</h2>
    <div className='projects_column'>
      <div className='pt1'>
        <h1 className='pt-name'>Horse Health Prediction</h1>
      </div>
      <div className='pt1'>
        <h1 className='pt-name'>Chronic Kidney Disease Prediction</h1>
      </div>
      <div className='pt1'>
        <h1 className='pt-name'>Customer Churn Prediction</h1>
      </div>
      <div className='pt1'>
        <h1 className='pt-name'>Wild Blueberry Prediction</h1>
      </div>
    </div>
    <div className='Project_content'>
    <p className='Project-text'>My journey involves crafting projects that dance on the cutting edge. Whether it's predicting future trends with machine learning magic or creating visual masterpieces through data storytelling, each project is a testament to my unbridled passion for the possibilities that AI and data science unfold.</p>
    </div>
    </section>
  )
}

export default Projects