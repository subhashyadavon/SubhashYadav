import React, { useState, useEffect } from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AvailabilityBadge from '../AvailabilityBadge/AvailabilityBadge'

const Hero = () => {
    const [loading, setLoading] = useState(true);
    const [phraseIndex, setPhraseIndex] = useState(0);

    const phrases = [
        "Architecting Digital Solutions...",
        "Deploying Creative Protocols...",
        "Initializing Innovation Engine...",
        "Loading Portfolio Matrix..."
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000); // 4 seconds total
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
            }, 1000); // Change phrase every second
            return () => clearInterval(interval);
        }
    }, [loading]);

    if (loading) {
        return (
            <div className="hero-intro">
                <div className="intro-text">{phrases[phraseIndex]}</div>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
            </div>
        )
    }

    return (
        <div id='home' className='hero fade-in'>
            <h1><span>Hi, I'm Subhash Yadav</span></h1>
            <AvailabilityBadge />

            <AnchorLink className="scroll-chevrons" offset={80} href='#about'>
                <span></span>
                <span></span>
                <span></span>
            </AnchorLink>
        </div>
    )
}

export default Hero
