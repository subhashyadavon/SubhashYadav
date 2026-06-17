import './Footer.css'
import SocialLinks from '../SocialLinks/SocialLinks'

const Footer = () => {
    const now = new Date()
    const lastUpdated = now.toLocaleString('default', { month: 'long', year: 'numeric' })
    const year = now.getFullYear()

    return (
        <footer className='footer'>
            <hr />
            <div className="footer-content">
                <SocialLinks />
                <div className="footer-text">
                    <p>© {year} Subhash Yadav. All rights reserved.</p>
                    <p><small>Last updated: {lastUpdated}</small></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer