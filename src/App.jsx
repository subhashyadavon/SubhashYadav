import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TechStack from './components/TechStack/TechStack'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Background from './components/Background/Background'


const App = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App