import './Footer.css'
import SocialLinks from '../SocialLinks/SocialLinks'

const Footer = () => {
    return (
        <footer className='footer'>
            <hr />
            <div className="footer-content">
                <SocialLinks />
                <div className="footer-text">
                    <p>© 2026 Subhash Yadav. All rights reserved.</p>
                    <p><small>Last updated: April 2026</small></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer