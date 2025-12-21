import React, { useState, useEffect } from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // 3 seconds animation
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="hero-intro">
                <div className="intro-text">System Initialization_</div>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
            </div>
        )
    }

    return (
        <div id='home' className='hero fade-in'>
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
