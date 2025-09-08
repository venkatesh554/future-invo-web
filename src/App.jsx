import React,{ useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './Navbar/Home';
import About from './Navbar/About';
import Contact from './Navbar/Contact';
import Services from './Navbar/Services';
import Projects from './Navbar/Projects';
import Blogs from './Navbar/Blogs';
import AnimatedCursor from 'react-animated-cursor';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    
    <div className="App">
      <AnimatedCursor />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
       </div>
       </>
  )
}
export default App
