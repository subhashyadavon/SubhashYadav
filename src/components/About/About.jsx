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
                    <p>Computer Science student with a strong interest in building scalable applications and backend services. I am continuously learning and enjoy transforming complex technical challenges into practical, reliable systems. I am adaptable and equipped with the foundational tools to tackle a wide range of tasks across software development, data systems, and applied AI.</p>
                    <a className="resume-btn" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                        View Curriculum Vitae / Resume
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About