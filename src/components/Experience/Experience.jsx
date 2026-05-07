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
                    <h4>Applied ML Engineer and SWE Engineer</h4>
                    <p><em>BIL Security Service Ltd. | January 2026 - April 2026</em></p>
                    <ul>
                        <li>Built a 10-second rolling ring-buffer that selectively extracts and analyzes critical video segments from live RTSP streams before central server ingestion.</li>
                        <li>Measured and documented system performance across multiple models on Intel i7 hardware — achieving ~21 FPS throughput and ~49ms detection latency using YOLOv8 architectures.</li>
                        <li>Benchmarked YOLOv8-Small against legacy Nano-scale models and recommended its adoption based on a 5.5X gain in detection density and significantly higher accuracy.</li>
                        <li>Built a multi-stage verification filter using silhouette aspect-ratio checks (&lt; 0.85), center-frame bias, and threat-priority policies to reduce environmental false positives.</li>
                        <li>Implemented a modular model registry enabling live swaps of detection models in memory without interrupting the active RTSP video stream.</li>
                    </ul>
                </div>
            </div>

            <div className="experience-category">
                <h3>Other Experience</h3>
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
