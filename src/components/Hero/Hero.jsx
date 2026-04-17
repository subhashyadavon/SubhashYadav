import React from 'react'
import './Hero.css'
import profile_img from '../../assets/subhash.jpeg'

const Hero = () => {
    return (
        <section id='home' className='hero'>
            <div className="two-column">
                <div className="left">
                    <h1>Subhash Yadav</h1>
                    <p className="hero-subtitle">Software Engineer</p>
                    <p className="hero-tagline">Specializing in Full-Scale Systems, Distributed Computing, and AI/ML Solutions.</p>
                </div>
                <div className="right">
                    <img src={profile_img} alt="Subhash Yadav" className="profile-img" />
                </div>
            </div>
        </section>
    )
}

export default Hero
