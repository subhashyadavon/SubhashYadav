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
                        <li>Implemented a 10-second rolling ring-buffer architecture that selectively extracts and analyzes critical video segments from live RTSP streams before central server ingestion.</li>
                        <li>Validated system efficiency across multiple models on Intel i7 hardware, achieving a peak real-time rate of ~21 FPS with a minimal detection latency of ~49ms using YOLOv8 architectures.</li>
                        <li>Justified the adoption of YOLOv8-Small, which delivered a 5.5X gain in detection density and a +446% accuracy breakthrough compared to legacy Nano-scale models.</li>
                        <li>Developed a multi-stage verification funnel utilizing silhouette aspect-ratio checks (&lt; 0.85), center-frame positioning bias, and threat-priority policies to eliminate environmental false positives.</li>
                        <li>Engineered a modular model registry that allows for "Live Swaps" of object detection models in system memory without interrupting the active RTSP video stream.</li>
                    </ul>
                </div>
            </div>

            <div className="experience-category">
                <h3>Other Experience</h3>
                <div className="experience-item">
                    <h4>Open-Source Contributor</h4>
                    <p><em>Various Projects | September 2025 - Present</em></p>
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
