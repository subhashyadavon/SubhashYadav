import React, { useRef, useState, useEffect } from 'react'
import './Navbar.css'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import linkedin_icon from '../../assets/linkedin_icon.png'
import git_icon from '../../assets/git_icon.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const menuRef = useRef();
  /* Use ref for previous scroll position to avoid re-triggering effect */
  const prevScrollPos = useRef(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      /* Visible if scrolling up (prev > current) or near top */
      const isVisible = prevScrollPos.current > currentScrollPos || currentScrollPos < 50;

      setVisible(isVisible);
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = () => {
    menuRef.current.style.right = '0'
  }

  const closeMenu = () => {
    menuRef.current.style.right = '-350px'
  }

  return (
    <div className={`navbar ${visible ? '' : 'navbar-hidden'}`}>
      <a href="https://www.linkedin.com/in/subhashyadavon/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src={linkedin_icon} alt="LinkedIn" />
      </a>

      <img src={menu_open} onClick={openMenu} className="nav-mob-open" alt="" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' offset={100} href='#home'>Home</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#about'>About Me</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#experience'>Experience</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#education'>Education</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#techstack'>Tech Stack</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#work'>Projects</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#contact'>Get in touch</AnchorLink></li>
      </ul>

      <a href="https://github.com/subhashyadavon" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src={git_icon} alt="GitHub" />
      </a>
    </div>
  )
}

export default Navbar