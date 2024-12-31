import React from 'react'
import './About.css'


const About = () => {
    return(
        <div id='about' className = 'about'>
            <div className = "about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className = "about-right">
                    <div className="about-para">
                        <p>I am a 3rd year Computer Science student at the University of Manitoba with a strong interest in Data Analysis and Software Development. Through various projects and volunteer experiences, I have honed my communication and problem-solving skills, and I thrive under pressure. Effective team player and capable of building strong team.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>AI/ML</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>Java</p><hr style={{width:"90%"}}/></div>
                        <div className="about-skill"><p>Python</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>SQL</p><hr style={{width:"95%"}}/></div>
                        <div className="about-skill"><p>HTML/CSS</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>C/C++</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>Web Computing</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>OOP</p><hr style={{width:"85%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
            <div className="about-achievement">
                <h1>4+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS IN COMP SCI</p>
            </div>
            </div>
        </div>
    )
}

export default About