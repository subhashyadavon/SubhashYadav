import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import './About.css'

const About = () => {

    const [showResumeDialog, setShowResumeDialog] = useState(false);
    // Resume URL
    const resumeUrl = 'https://drive.google.com/file/d/1Nj1cdCTstySe7Mk3m-G4MAfGy32YXsWr/view';

    const handleResumeClick = (e) => {
        e.preventDefault();
        setShowResumeDialog(true);
    };

    const onResumeRequest = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "80c64071-12a2-411d-b4f2-75ec97eaae4d");
        formData.append("subject", "New Resume Request");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setShowResumeDialog(false);
            window.open(resumeUrl, '_blank');
        } else {
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>

            <div className="about-me-section">
                <div className="about-card about-intro">
                    <h3>Who am I?</h3>
                    <p>Fourth-year Computer Science student passionate about building full-scale systems and AI/ML solutions. Experienced in open-source contributions and developing impactful projects through strong problem-solving, coding, and collaboration skills.</p>
                    <div className="resume-container">
                        <a href={resumeUrl} onClick={handleResumeClick} className="resume-btn">
                            Check out my Resume
                        </a>
                    </div>
                </div>
            </div>

            {/* Resume Request Dialog */}
            {showResumeDialog && createPortal(
                <div className="dialog-overlay">
                    <form onSubmit={onResumeRequest} className="dialog-box">
                        <h3>Request Resume</h3>
                        <p>Please enter your details to view my resume.</p>
                        <input type="text" name="organization" placeholder="Organization Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <button type="submit">View Resume</button>
                        <button type="button" onClick={() => setShowResumeDialog(false)} style={{ background: 'transparent', border: '1px solid #fff', marginTop: '-10px' }}>Cancel</button>
                    </form>
                </div>,
                document.body
            )}
        </div>
    )
}

export default About