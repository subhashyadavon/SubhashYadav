import React from 'react'
import './About.css'

const About = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1G9pj_gHWLVIQ7kA9On2vsoj89ZzCh9t7/view?usp=sharing';

    return (
        <section id='about' className='about'>
            <h2>About Me</h2>
            <p>Final-year Computer Science student passionate about building full-scale systems and AI/ML solutions. Currently developing computer vision systems for real-time surveillance and contributing to Apache Kafka, with proven expertise in distributed systems, machine learning, and open-source collaboration.</p>
            <p>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    [View Curriculum Vitae / Resume]
                </a>
            </p>
        </section>
    )
}

export default About