import './Experience.css'

const Experience = () => {
    return (
        <section id='experience' className='experience'>
            <h2>Professional Experience</h2>

            <div className="experience-item">
                <h4>Software Developer Intern</h4>
                <div className="experience-header">
                    <p><em>Superstars · Remote | May 2026 - Present</em></p>
                    <p className="project-link"><a href="https://superstars.co/" target="_blank" rel="noopener noreferrer">superstars.co ↗</a></p>
                </div>
                <ul>
                    <li>Developing front-end features for a Video Professional Network using Angular to build responsive UIs.</li>
                    <li>Implementing API integration with Postman to connect Angular components with backend services.</li>
                    <li>Contributing to Jobs & Talent Video Board development, translating mobile functionality to web platform.</li>
                    <li>Driving UI/UX enhancements to optimize navigation flow and deliver a faster, cleaner web application.</li>
                </ul>
            </div>

            <div className="experience-item">
                <h4>Software Engineer Intern</h4>
                <div className="experience-header">
                    <p><em>BIL Security Service Ltd. (Industry Project) | January 2026 - April 2026</em></p>
                    <p className="project-link"><a href="https://github.com/Onyelechie/bil_security_ml" target="_blank" rel="noopener noreferrer">Source Code on GitHub ↗</a></p>
                </div>
                <ul>
                    <li>Measured and documented system performance across multiple models on Intel i7 hardware — achieving ~21 FPS throughput and ~49ms detection latency using YOLOv8 architectures.</li>
                    <li>Benchmarked YOLOv8-Small against legacy Nano-scale models and recommended its adoption based on a 5.5X gain in detection density and significantly higher accuracy.</li>
                    <li>Built a multi-stage verification filter using silhouette aspect-ratio checks (&lt; 0.85), center-frame bias, and threat-priority policies to reduce environmental false positives.</li>
                    <li>Implemented a modular model registry enabling live swaps of detection models in memory without interrupting the active RTSP video stream.</li>
                    <li>Built a 10-second rolling ring-buffer that selectively extracts and analyzes critical video segments from live RTSP streams before central server ingestion.</li>
                </ul>
            </div>

        </section>
    )
}

export default Experience
