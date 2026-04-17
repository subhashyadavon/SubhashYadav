import React, { useState, useEffect } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { HomeIcon, UserIcon, BriefcaseIcon, BookIcon, CodeIcon, GridIcon, MailIcon } from './NavIcons'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 }); // trigger when halfway visible

    const sectionIds = ['home', 'about', 'experience', 'education', 'techstack', 'work', 'contact'];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <AnchorLink href='#home'>SY</AnchorLink>
      </div>
      <ul className="nav-menu">
        <li><AnchorLink className={`anchor-link ${activeSection === 'home' ? 'active' : ''}`} offset={100} href='#home'><HomeIcon /><span className="nav-text">Home</span></AnchorLink></li>
        <li><AnchorLink className={`anchor-link ${activeSection === 'about' ? 'active' : ''}`} offset={100} href='#about'><UserIcon /><span className="nav-text">About</span></AnchorLink></li>
        <li><AnchorLink className={`anchor-link ${activeSection === 'experience' ? 'active' : ''}`} offset={100} href='#experience'><BriefcaseIcon /><span className="nav-text">Experience</span></AnchorLink></li>
        <li><AnchorLink className={`anchor-link ${activeSection === 'education' ? 'active' : ''}`} offset={100} href='#education'><BookIcon /><span className="nav-text">Education</span></AnchorLink></li>
        <li><AnchorLink className={`anchor-link ${activeSection === 'techstack' ? 'active' : ''}`} offset={100} href='#techstack'><CodeIcon /><span className="nav-text">Skills</span></AnchorLink></li>
        <li><AnchorLink className={`anchor-link ${activeSection === 'work' ? 'active' : ''}`} offset={100} href='#work'><GridIcon /><span className="nav-text">Work</span></AnchorLink></li>
        <li><AnchorLink className={`anchor-link ${activeSection === 'contact' ? 'active' : ''}`} offset={100} href='#contact'><MailIcon /><span className="nav-text">Contact</span></AnchorLink></li>
      </ul>
    </nav>
  )
}

export default Navbar