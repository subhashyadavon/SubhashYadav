import React, { useState } from 'react'
import './Experience.css'

const Experience = () => {
    const [activeTab, setActiveTab] = useState('technical');

    return (
        <div id='experience' className='experience'>
            <div className="experience-wrapper">
                <div className="experience-title">
                    <h1>Experience</h1>
                </div>

                <div className="experience-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
                        onClick={() => setActiveTab('technical')}
                    >
                        Technical Experience
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'industrial' ? 'active' : ''}`}
                        onClick={() => setActiveTab('industrial')}
                    >
                        Industrial Projects
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'other' ? 'active' : ''}`}
                        onClick={() => setActiveTab('other')}
                    >
                        Other Experience
                    </button>
                </div>

                <div className="glass-card">
                    {activeTab === 'technical' && (
                        <div className="experience-container fade-in">
                            <div className="experience-line"></div> {/* Vertical line */}

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
                    )}
                    {activeTab === 'industrial' && (
                        <div className="experience-container fade-in">
                            <div className="experience-line"></div> {/* Vertical line */}

                            <div className="experience-item">
                                <div className="timeline-dot"></div>
                                <div className="experience-content">
                                    <div className="experience-logo">
                                        <i className="fa-solid fa-video"></i>
                                    </div>
                                    <div className="experience-info">
                                        <h3>Applied AI Systems Engineer</h3>
                                        <h4>BIL Security Service Ltd.</h4>
                                        <p className="experience-location">Winnipeg, Canada</p>
                                        <ul className="experience-description">
                                            <li>Designed and implemented a benchmarking pipeline to evaluate multiple object detection models (YOLOv8-Nano, YOLOv8-Small, YOLOv5-Nano, EfficientDet-D0, SSD-MobileNet) on CPU-constrained hardware, measuring FPS, latency, CPU, and memory usage.</li>
                                            <li>Analyzed model performance trade-offs between speed and accuracy, identifying optimal models for real-time CCTV inference under limited resource constraints.</li>
                                            <li>Developed object detection workflows to identify people and vehicles, generating bounding boxes with confidence scores and validating detection consistency across varied video scenarios.</li>
                                            <li>Evaluated system architecture trade-offs (on-premises vs. centralized processing, clip-based vs. RTSP streaming) and recommended an edge-based, event-driven inference approach.</li>
                                            <li>Assessed communication protocols (HTTP vs. WebSocket) for edge-to-server interaction, recommending HTTP for reliable event-based uploads under unstable network conditions.</li>
                                        </ul>
                                    </div>
                                    <div className="experience-date">January 2026 - Present</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'other' && (
                        <div className="experience-container fade-in">
                            <div className="experience-line"></div> {/* Vertical line */}

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
                                            <li>Contributed to LangChain, Apache Kafka, and Apache Airflow by identifying and fixing bugs, submitting pull requests, and improving documentation, gaining hands-on exposure to LLM integrations, distributed event streaming, and workflow orchestration at scale.</li>
                                            <li>Collaborated with global open-source contributors on stream processing, DAG scheduling, and retrieval-augmented generation (RAG) initiatives, analyzing system behavior and proposing improvements to enhance reliability and performance.</li>
                                        </ul>
                                    </div>
                                    <div className="experience-date">September 2025 - Present</div>
                                </div>
                            </div>

                            <div className="experience-item">
                                <div className="timeline-dot"></div>
                                <div className="experience-content">
                                    <div className="experience-logo">
                                        <i className="fa-solid fa-store"></i>
                                    </div>
                                    <div className="experience-info">
                                        <h3>Customer Service Representative</h3>
                                        <h4>Sobeys · Permanent Part-time</h4>
                                        <p className="experience-location">Winnipeg, Manitoba, Canada · On-site</p>
                                        <ul className="experience-description">
                                            <li>Provided friendly and efficient customer service in a fast-paced retail grocery environment, assisting customers with inquiries, product location, and checkout processes.</li>
                                            <li>Collaborated with team members to maintain store standards and ensure a positive, welcoming shopping experience for all customers.</li>
                                        </ul>
                                    </div>
                                    <div className="experience-date">May 2023 - Present</div>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Experience
