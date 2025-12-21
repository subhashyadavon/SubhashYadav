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
            <h1><span>Hi, I'm Subhash Yadav</span></h1>

            <div className="scroll-chevrons">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Hero
