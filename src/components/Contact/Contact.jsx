import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setErrorMsg("");
        
        const formData = new FormData(event.target);
        formData.append("access_key", "80c64071-12a2-411d-b4f2-75ec97eaae4d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: json
            });
            const res = await response.json();
            if (res.success) {
                setShowSuccess(true);
                event.target.reset();
                // Auto-hide the popup after 3 seconds
                setTimeout(() => {
                    setShowSuccess(false);
                }, 3000);
            } else {
                setErrorMsg("Error sending message. Please try again later.");
            }
        } catch (error) {
            setErrorMsg("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id='contact' className='contact'>
            {showSuccess && (
                <div className="success-popup">
                    <div className="popup-content">
                        <div className="checkmark-circle">
                            <div className="checkmark"></div>
                        </div>
                        <h3>Message Sent!</h3>
                        <p>Thank you for reaching out, Subhash will get back to you soon.</p>
                    </div>
                </div>
            )}

            <h2>Contact Information</h2>
            <div className="contact-details">
                <p><strong>Email:</strong> subhashyadavon@gmail.com</p>
                <p><strong>Location:</strong> Winnipeg, Manitoba, Canada</p>
                <p><strong>Phone:</strong> +1(431)-588-3184</p>
            </div>
            <hr />
            <form onSubmit={onSubmit} className='contact-form'>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name='name' required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name='email' required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type='submit' disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {errorMsg && <p className="form-feedback error">{errorMsg}</p>}
            </form>
        </section>
    )
}

export default Contact