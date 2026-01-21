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
                                    <i className="fa-solid fa-video"></i>
                                </div>
                                <div className="experience-info">
                                    <h3>Machine Learning Engineer</h3>
                                    <h4>BIL Security Service Ltd.</h4>
                                    <p className="experience-location">Winnipeg, Canada</p>
                                    <ul className="experience-description">
                                        <li>Developing a computer vision solution to reduce false alarms in CCTV surveillance by distinguishing critical events (humans, vehicles, illegal activity) from environmental noise, evaluating trade-offs between clip-based and RTSP streaming approaches.</li>
                                        <li>Designing distributed ML architectures comparing centralized vs on-premises processing with YOLOv8 and GStreamer, ensuring fail-secure operation, data privacy, and reliable alerting for customer property safety.</li>
                                    </ul>
                                </div>
                                <div className="experience-date">January 2026 - Present</div>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="timeline-dot"></div>
                            <div className="experience-content">
                                <div className="experience-logo">
                                    <i className="fa-brands fa-apache"></i>
                                </div>
                                <div className="experience-info">
                                    <h3>Open-Source Contributor</h3>
                                    <h4>Open Source Community | <a href="https://github.com/subhashyadavon" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>GitHub</a></h4>
                                    <p className="experience-location">Remote</p>
                                    <ul className="experience-description">
                                        <li>Contributing to open-source projects like Apache Airflow, LangChain, and Kafka to learn large-scale and distributed systems.</li>
                                    </ul>
                                </div>
                                <div className="experience-date">September 2026 - Present</div>
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
                                    <ul className="experience-description">
                                        <li>Evaluated AI model responses through systematic prompting and assessment to identify outliers and generate high-quality training data for model improvement.</li>
                                    </ul>
                                </div>
                                <div className="experience-date">May 2025 - July 2025</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
