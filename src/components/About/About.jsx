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
                    <p>Fourth-year Computer Science student passionate about building full-scale systems and AI/ML solutions. Currently developing computer vision systems for real-time surveillance and contributing to Apache Kafka, with proven expertise in distributed systems, machine learning, and open-source collaboration.</p>
                    <a className="resume-btn" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                        View Curriculum Vitae / Resume
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About