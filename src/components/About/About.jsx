import './About.css'
import profile_img from '../../assets/subhash.jpeg'

const About = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1G9pj_gHWLVIQ7kA9On2vsoj89ZzCh9t7/view?usp=sharing';

    return (
        <section id='about' className='about'>
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-image">
                    <img src={profile_img} alt="Subhash Yadav" />
                </div>
                <div className="about-text">
                    <p>Fourth-year Computer Science student at the University of Manitoba, passionate about building real-world systems and exploring AI/ML. I enjoy tackling hard problems — from computer vision pipelines to data engineering — and I'm always looking for the next thing to learn and build.</p>
                    <a className="resume-btn" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                        View Curriculum Vitae / Resume
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About