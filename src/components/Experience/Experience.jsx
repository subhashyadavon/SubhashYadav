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

                        <div className="experience-item">
                            <div className="experience-logo">
                                <i className="fa-brands fa-apache"></i> {/* Placeholder for Apache Airflow */}
                            </div>
                            <div className="experience-info">
                                <h3>Open-Source Contributor</h3>
                                <h4>Apache Airflow</h4>
                                <p className="experience-date">Sep 2025 - Present · 4 mos</p>
                                <p className="experience-location">Winnipeg, Manitoba, Canada · Remote</p>
                            </div>
                            <div className="experience-edit">
                                <i className="fa-solid fa-pen"></i>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="experience-logo">
                                <i className="fa-solid fa-link"></i> {/* Placeholder for LangChain */}
                            </div>
                            <div className="experience-info">
                                <h3>Open-Source Contributor</h3>
                                <h4>LangChain</h4>
                                <p className="experience-date">Sep 2025 - Present · 4 mos</p>
                                <p className="experience-location">Winnipeg, Manitoba, Canada · Remote</p>
                            </div>
                            <div className="experience-edit">
                                <i className="fa-solid fa-pen"></i>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="experience-logo">
                                <i className="fa-solid fa-brain"></i> {/* Placeholder for Outlier AI */}
                            </div>
                            <div className="experience-info">
                                <h3>Software Engineer for AI Training Data</h3>
                                <h4>Outlier AI · Freelance</h4>
                                <p className="experience-date">May 2025 - Nov 2025 · 7 mos</p>
                                <p className="experience-location">Winnipeg, Manitoba, Canada · Remote</p>
                            </div>
                            <div className="experience-edit">
                                <i className="fa-solid fa-pen"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
