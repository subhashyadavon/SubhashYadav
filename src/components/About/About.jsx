import React from 'react'
import './About.css'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>

            <div className="about-me-section">
                <div className="about-card about-intro">
                    <h3>Who am I?</h3>
                    <p>I am a 3rd year Computer Science student at the University of Manitoba with a strong interest in Data Analysis and Software Development. Through various projects and volunteer experiences, I have honed my communication and problem-solving skills. I thrive under pressure and am an effective team player capable of building strong collaborations.</p>
                    <div className="resume-container">
                        <a href='https://drive.google.com/file/d/1agOuA7TRcgjK1-YJXTt5AlVQOpkrzw6R/view' target="_blank" rel="noopener noreferrer" className="resume-btn">
                            Check out my Resume
                        </a>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default About