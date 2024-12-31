import React from 'react'
import { useState } from "react";
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
 

const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "80c64071-12a2-411d-b4f2-75ec97eaae4d");

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
          alert(res.message);
        
        }
      };
    
    return(
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get In Touch</h1>
            </div>
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
                    <input type="text" placeholder='Enter your name' name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email'/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" row="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact