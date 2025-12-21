import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import './About.css'

const About = () => {

    const [showResumeDialog, setShowResumeDialog] = useState(false);
    const [resumeErrors, setResumeErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Resume URL
    const resumeUrl = 'https://drive.google.com/file/d/1Nj1cdCTstySe7Mk3m-G4MAfGy32YXsWr/view';

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateOrganization = (org) => {
        // Allow letters, numbers, spaces, and common punctuation, minimum 2 characters
        const orgRegex = /^[a-zA-Z0-9\s.,'&-]{2,}$/;
        return orgRegex.test(org.trim());
    };

    const handleResumeClick = (e) => {
        e.preventDefault();
        setShowResumeDialog(true);
        setResumeErrors({}); // Clear errors when opening dialog
    };

    const onResumeRequest = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const organization = formData.get('organization');
        const email = formData.get('email');

        // Validate
        const newErrors = {};

        if (!validateOrganization(organization)) {
            newErrors.organization = 'Please enter a valid organization name';
        }

        if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (Object.keys(newErrors).length > 0) {
            setResumeErrors(newErrors);
            return;
        }

        // Clear errors if validation passes
        setResumeErrors({});
        setIsSubmitting(true);
        formData.append("access_key", "80c64071-12a2-411d-b4f2-75ec97eaae4d");
        formData.append("subject", "New Resume Request");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const res = await response.json();

            if (res.success) {
                setShowResumeDialog(false);
                window.open(resumeUrl, '_blank');
            } else {
                // Handle specific rate limit error from Web3Forms
                const errorMessage = res.message && res.message.includes('Rate limited')
                    ? 'Rate limit reached. Please try again after one hour.'
                    : (res.message || 'Something went wrong. Please try again.');
                alert(errorMessage);
            }
        } catch (error) {
            console.error('Resume request error:', error);
            alert("Network error. Please check your internet connection.");
        } finally {
            setIsSubmitting(false);
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
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Requesting...' : 'View Resume'}
                        </button>
                        <button type="button" onClick={() => setShowResumeDialog(false)} style={{ background: 'transparent', border: '1px solid #fff', marginTop: '-10px' }}>Cancel</button>
                    </form>
                </div>,
                document.body
            )}
        </div>
    )
}

export default About