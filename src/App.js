import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './About'
import Header from './Header'
import Resume from './Resume'
import Home from './Home'
import Skill from './Skill'
import Contact from './Contact'
import './style.css'


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} /> 
       <Route path='about' element={<About/>} ></Route>
       <Route path="resume" element={<Resume/>}/>
       <Route path="skill" element={<Skill/>}/>
       <Route path="contact" element={<Contact/>}/>

      </Routes>
      
      
      </BrowserRouter>
       
    </div>
  )
}

export default App


