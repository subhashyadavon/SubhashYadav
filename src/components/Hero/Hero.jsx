import React, { useState, useEffect } from 'react'
import './Hero.css'
import profile_img from '../../assets/subhash.jpeg'
import SocialLinks from '../SocialLinks/SocialLinks'

const Hero = () => {
    const titles = ["Software Engineer", "Problem Solver", "Deep Thinker", "Continuous Learner"];
    const [titleIndex, setTitleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        let timer;
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            timer = setTimeout(() => {
                setText(currentTitle.substring(0, text.length - 1));
                if (text === '') {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                }
            }, 50); // Deleting speed
        } else {
            timer = setTimeout(() => {
                setText(currentTitle.substring(0, text.length + 1));
                if (text === currentTitle) {
                    setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
                }
            }, 100); // Typing speed
        }
        
        return () => clearTimeout(timer);
    }, [text, isDeleting, titleIndex]);

    return (
        <section id='home' className='hero'>
            <div className="hero-content">
                <div className="hero-text-container">
                    <h1>Hi, I'm <span className="highlight">Subhash Yadav</span></h1>
                    <h2 className="typing-text">I am a <span>{text}</span><span className="cursor">|</span></h2>
                    <SocialLinks />
                </div>
                <div className="hero-image-container">
                    <div className="image-wrapper">
                        <img src={profile_img} alt="Subhash Yadav" className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
