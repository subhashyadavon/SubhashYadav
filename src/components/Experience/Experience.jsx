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
                    <li>Built responsive Angular front-end features for a Video Professional Network, including the Jobs & Talent Video Board.</li>
                    <li>Integrated REST APIs with Postman to connect Angular components to backend services.</li>
                    <li>Improved navigation flow and UI/UX for a faster, cleaner web experience.</li>
                </ul>
            </div>

            <div className="experience-item">
                <h4>Software Engineer Intern</h4>
                <div className="experience-header">
                    <p><em>BIL Security Service Ltd. (Industry Project) | January 2026 - April 2026</em></p>
                    <p className="project-link"><a href="https://github.com/Onyelechie/bil_security_ml" target="_blank" rel="noopener noreferrer">Source Code on GitHub ↗</a></p>
                </div>
                <ul>
                    <li>Benchmarked YOLOv8 models on Intel i7 hardware, achieving ~21 FPS / ~49ms latency, and recommended YOLOv8-Small for a 5.5X gain in detection density.</li>
                    <li>Built a multi-stage verification filter with threat-priority policies to reduce false positives.</li>
                    <li>Designed a modular model registry and rolling ring-buffer for live model swaps and RTSP segment capture.</li>
                </ul>
            </div>

        </section>
    )
}

export default Experience
