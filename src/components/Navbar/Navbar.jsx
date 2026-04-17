import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' offset={100} href='#home'>Home</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#about'>About</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#experience'>Experience</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#education'>Education</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#techstack'>Skills</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#work'>Projects</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#contact'>Contact</AnchorLink></li>
      </ul>
    </div>
  )
}

export default Navbar