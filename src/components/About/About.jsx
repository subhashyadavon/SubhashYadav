import { useState } from 'react'
import './About.css'
import profile_img from '../../assets/subhash.jpeg'

const About = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section id='about' className='about'>
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-image">
                    <img src={profile_img} alt="Subhash Yadav" />
                </div>
                <div className="about-text">
                    <p>Computer Science student</p>
                    <button className="resume-btn" onClick={() => setShowModal(true)}>
                        View Curriculum Vitae / Resume
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="resume-modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="resume-modal" onClick={e => e.stopPropagation()}>
                        <p>Resume is currently not available.</p>
                        <button className="resume-modal-close" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default About