import { useState, useEffect } from 'react'
import './Hero.css'
import SocialLinks from '../SocialLinks/SocialLinks'

const titles = ["Engineer", "Problem Solver", "Deep Thinker", "Continuous Learner"];

const Hero = () => {
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
                    <h1><span className="highlight">Subhash Yadav</span></h1>
                    <h2 className="typing-text">I am {/^[aeiou]/i.test(text) ? 'an' : 'a'} <span>{text}</span><span className="cursor">|</span></h2>
                    <SocialLinks />
                </div>
            </div>
        </section>
    )
}

export default Hero
