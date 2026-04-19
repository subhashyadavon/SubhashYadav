import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TechStack from './components/TechStack/TechStack'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Preloader from './components/Preloader/Preloader'


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 2 seconds to show off the loader, or until the page is fully loaded
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {isLoading && <Preloader />}
      <div className={`app-container ${isLoading ? 'hidden' : ''}`}>
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
    </>
  )
}

export default App