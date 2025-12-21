import React from 'react'
import { useState } from "react";
import { createPortal } from 'react-dom';
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {

    const [showDialog, setShowDialog] = useState(false);
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateName = (name) => {
        // Allow letters (including international), spaces, hyphens, and apostrophes, min 2 characters
        const nameRegex = /^[\p{L}\s'-]{2,}$/u;
        return nameRegex.test(name.trim());
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setErrors({});

        const form = event.target;
        const formData = new FormData(form);

        // Get form values for validation
        const name = formData.get('name');
        const email = formData.get('email');

        // Validate
        const newErrors = {};

        if (!validateName(name)) {
            newErrors.name = 'Please enter a valid name (minimum 2 characters)';
        }

        if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        formData.append("access_key", "80c64071-12a2-411d-b4f2-75ec97eaae4d");

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
                setShowDialog(true);
                form.reset();
                setErrors({});
            } else {
                setErrors({ submit: res.message || 'Submission failed. Please check your Access Key.' });
            }
        } catch (error) {
            console.error('Detailed submission error:', error);
            setErrors({
                submit: 'Network error. Please check your internet connection.'
            });
        }
    };

    const closeDialog = () => {
        setShowDialog(false);
    }

    return (
        <div id='contact' className='contact'>
            <div className="contact-wrapper">
                <div className="contact-title">
                    <h1>Get In Touch</h1>
                </div>
                <div className="glass-card">
                    <div className="contact-section">
                        <div className="contact-left">
                            <h1>Let's talk</h1>
                            <p>I'm currently looking for a Internship or co-op, so feel free to contact me.</p>
                            <div className="contact-details">
                                <div className="contact-detail">
                                    <img src={mail_icon} alt="" />
                                    <p>subhashyadavon@gmail.com</p>
                                </div>
                                <div className="contact-detail">
                                    <img src={location_icon} alt="" />
                                    <p>Winnipeg, Manitoba, Canada</p>
                                </div>
                                <div className="contact-detail">
                                    <img src={call_icon} alt="" />
                                    <p>+1(431)-588-3184</p>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={onSubmit} className='contact-right'>
                            <label htmlFor="">Your Name</label>
                            <input type="text" placeholder='Enter your name' name='name' required />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                            <label htmlFor="">Your Email</label>
                            <input type="email" placeholder='Enter your email' name='email' required />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                            <label htmlFor="">Write your message here</label>
                            <textarea name="message" row="8" placeholder='Enter your message' required></textarea>
                            {errors.submit && <span className="error-message">{errors.submit}</span>}
                            <button type='submit' className="contact-submit">Submit Now</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Dialog */}
            {showDialog && createPortal(
                <div className="dialog-overlay">
                    <div className="dialog-box">
                        <h3>Thank You!</h3>
                        <p>I will try to reach out as soon as possible.</p>
                        <button onClick={closeDialog}>Close</button>
                    </div>
                </div>,
                document.body
            )}
        </div>
    )
}

export default Contact