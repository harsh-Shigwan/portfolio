
import './App.css';
import Home from './components/home/Home';
import React from 'react'
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
const App = () => {
  return (
    <div>
    <Header></Header>
    <main className='main'>
    <Home></Home>
    <About/>
    <Skills/>
    <Qualification></Qualification>
    <Contact/>
    </main>
   <Footer/>
   <ScrollUp></ScrollUp>
    </div>
    
  )
}

export default App