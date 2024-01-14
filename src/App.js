import React from 'react'
import { About, Contact, Skills, Projects } from './container';
import { Navbar} from './components';
import './App.css';


const App = () => {
  return (
      <div className='app'>
      <Navbar/>
      <About id="About"/>
      <Skills id="Skills"/>
      <Projects id="Projects"/>
      <Contact id="Contact"/>
    </div>
  );
};

export default App