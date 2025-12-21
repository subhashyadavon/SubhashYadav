import React from 'react'
import './Experience.css'

const Experience = () => {
    return (
        <div id='experience' className='experience'>
            <div className="experience-wrapper">
                <div className="experience-title">
                    <h1>Experience</h1>
                </div>
                <div className="glass-card">
                    <div className="experience-container">
                        <div className="experience-line"></div> {/* Vertical line */}

                        <div className="experience-item">
                            <div className="timeline-dot"></div>
                            <div className="experience-content">
                                <div className="experience-logo">
                                    <i className="fa-brands fa-apache"></i>
                                </div>
                                <div className="experience-info">
                                    <h3>Open-Source Contributor</h3>
                                    <h4>Apache Airflow</h4>
                                    <p className="experience-location">Winnipeg, Manitoba, Canada · Remote</p>
                                </div>
                                <div className="experience-date">Sep 2025 - Present</div>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="timeline-dot"></div>
                            <div className="experience-content">
                                <div className="experience-logo">
                                    <i className="fa-solid fa-link"></i>
                                </div>
                                <div className="experience-info">
                                    <h3>Open-Source Contributor</h3>
                                    <h4>LangChain</h4>
                                    <p className="experience-location">Winnipeg, Manitoba, Canada · Remote</p>
                                </div>
                                <div className="experience-date">Sep 2025 - Present</div>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="timeline-dot"></div>
                            <div className="experience-content">
                                <div className="experience-logo">
                                    <i className="fa-solid fa-brain"></i>
                                </div>
                                <div className="experience-info">
                                    <h3>Software Engineer for AI Training Data</h3>
                                    <h4>Outlier AI · Freelance</h4>
                                    <p className="experience-location">Winnipeg, Manitoba, Canada · Remote</p>
                                </div>
                                <div className="experience-date">May 2025 - Nov 2025</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
