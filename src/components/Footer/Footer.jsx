import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import linkedin_icon from '../../assets/linkedin_icon.png'
import git_icon from '../../assets/git_icon.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className = "footer-top-left">
                    <img src={logo} alt="" />
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-down"><p> Copyright © 2025 Subhash Yadav. All rights reserved.  </p></div>
                    <div className="footer-bottom-right">
                    <a href='https://www.linkedin.com/in/subhashyadavon/'><img src={linkedin_icon} alt="" /></a>
                    <a href='https://github.com/Subhash1861815'><img src={git_icon} alt="" /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer