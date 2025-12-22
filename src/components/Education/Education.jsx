import React from 'react'
import './Education.css'

const Education = () => {
    return (
        <div id='education' className='education'>
            <div className="education-wrapper">
                <div className="education-title">
                    <h1>Education</h1>
                </div>
                <div className="glass-card">
                    <div className="education-container">
                        <div className="education-line"></div> {/* Vertical line */}

                        <div className="education-item">
                            <div className="education-dot"></div>
                            <div className="education-content">
                                <div className="education-info">
                                    <div className="education-header">
                                        <h3>Bachelor of Computer Science, Minor in Mathematics</h3>
                                        <div className="education-date">September 2022 - December 2026</div>
                                    </div>
                                    <h4>University of Manitoba</h4>
                                    <p className="education-location">Winnipeg, Canada</p>
                                    <div className="education-coursework">
                                        <strong>Relevant Courses:</strong> Software Engineering 2, Human Computer Interaction, Databases, Distributed Systems, Operating Systems, Data Structures and Algorithms 3, Object-Oriented Programming, Artificial Intelligence 1, Machine Learning 1, etc.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
