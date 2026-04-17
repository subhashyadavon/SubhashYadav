import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <AnchorLink href='#home'>SY</AnchorLink>
      </div>
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' offset={100} href='#home'><span className="nav-text">Home</span></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#about'><span className="nav-text">About</span></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#experience'><span className="nav-text">Experience</span></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#education'><span className="nav-text">Education</span></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#techstack'><span className="nav-text">Skills</span></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#work'><span className="nav-text">Work</span></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#contact'><span className="nav-text">Contact</span></AnchorLink></li>
      </ul>
    </nav>
  )
}

export default Navbar