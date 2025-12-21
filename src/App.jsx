import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TechStack from './components/TechStack/TechStack'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Background from './components/Background/Background'
import CustomCursor from './components/CustomCursor/CustomCursor'
import ClickFeedback from './components/ClickFeedback/ClickFeedback'


const App = () => {
  return (
    <div>
      <CustomCursor />
      <ClickFeedback />
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <TechStack />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App