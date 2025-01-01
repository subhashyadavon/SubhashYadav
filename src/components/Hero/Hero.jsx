import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    return(
        <div id='home' className = 'hero'>
            <h1><span>I'm Subhash Yadav,</span> 3rd year Computer Science student at the University of Manitoba. </h1>
            <p>Thanks for visiting my profile! Scroll down for more information.</p>
            <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className='hero-resume'> <a href='https://drive.google.com/file/d/1agOuA7TRcgjK1-YJXTt5AlVQOpkrzw6R/view'>My resume</a></div>
            </div>
        </div>
    )
}

export default Hero
