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


const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <main className="main-content">
        <About />
        <Experience />
        <Education />
        <TechStack />
        <MyWork />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App