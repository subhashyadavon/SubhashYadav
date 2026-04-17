import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { HomeIcon, UserIcon, BriefcaseIcon, BookIcon, CodeIcon, GridIcon, MailIcon } from './NavIcons'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <AnchorLink href='#home'>SY</AnchorLink>
      </div>
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' offset={100} href='#home'><HomeIcon /><span className="nav-text">Home</span></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#about'><UserIcon /><span className="nav-text">About</span></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#experience'><BriefcaseIcon /><span className="nav-text">Experience</span></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#education'><BookIcon /><span className="nav-text">Education</span></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#techstack'><CodeIcon /><span className="nav-text">Skills</span></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#work'><GridIcon /><span className="nav-text">Work</span></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#contact'><MailIcon /><span className="nav-text">Contact</span></AnchorLink></li>
      </ul>
    </nav>
  )
}

export default Navbar