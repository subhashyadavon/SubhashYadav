import React from 'react'
import './Experience.css'

const Experience = () => {
    return (
        <section id='experience' className='experience'>
            <h2>Professional Experience</h2>

            <div className="experience-category">
                <h3>Technical Experience</h3>
                <div className="experience-item">
                    <h4>Software Engineer for AI Training Data</h4>
                    <p><em>Outlier AI · Freelance | May 2025 - July 2025</em></p>
                    <ul>
                        <li>Evaluated AI model responses through systematic prompting and assessment to identify outliers and generate high-quality training data for model improvement.</li>
                    </ul>
                </div>
            </div>

            <div className="experience-category">
                <h3>Industrial Projects</h3>
                <div className="experience-item">
                    <h4>Applied AI Systems Engineer</h4>
                    <p><em>BIL Security Service Ltd. | January 2026 - April 2026</em></p>
                    <ul>
                        <li>Boosted real-time detection accuracy by 112% (from 34% baseline to 72.1% mAP) by performing site-specific fine-tuning.</li>
                        <li>Reduced hardware infrastructure costs by 100% by optimizing YOLOv8 models with Intel OpenVINO.</li>
                        <li>Architected a scalable edge-to-cloud security pipeline capable of monitoring 10 simultaneous camera feeds.</li>
                        <li>Designed and implemented an automated benchmarking suite for model performance evaluation.</li>
                        <li>Engineered a resilient event-driven communication layer using HTTP protocols.</li>
                    </ul>
                </div>
            </div>

            <div className="experience-category">
                <h3>Other Experience</h3>
                <div className="experience-item">
                    <h4>Open-Source Contributor</h4>
                    <p><em>Apache Kafka, Apache Airflow, LangChain | September 2025 - Present</em></p>
                    <ul>
                        <li>Contributed to identifying and fixing bugs, and improving documentation in major open-source projects.</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h4>Customer Service Representative</h4>
                    <p><em>Sobeys | May 2023 - Present</em></p>
                    <ul>
                        <li>Provided friendly and efficient customer service in a fast-paced retail grocery environment.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience
