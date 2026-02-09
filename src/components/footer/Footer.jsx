import "./Footer.css";
import Map from '../map/Map';
import { Link } from 'react-router-dom';

const socials = [
    {
        name: 'Facebook',
        url: 'https://facebook.com/tu_pagina',
        icon: (
            <svg viewBox="0 0 24 24" width="35" height="35" fill="currentColor">
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
            </svg>
        )
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/tu_usuario',
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="..." />
            </svg>
        )
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/tu_usuario',
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="..." />
            </svg>
        )
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/company/tu_empresa',
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="..." />
            </svg>
        )
    }
];

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Top Row: Images + Map + Contact */}
                <div className="footer-row">
                    {/* Left: Flickr-style images */}
                    <div className="footer-section">
                        <h3 className="footer-title">See all our pictures on flickr</h3>
                        <div className="footer-images-grid">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="footer-image-placeholder">
                                    <div className="image-overlay">Photo {i}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center: Map */}
                    <div className="footer-section">
                        <h3 className="footer-title">Our Office</h3>
                        <div className="footer-map">
                            <Map lat={28.12749828562955} lng={-15.44668665156636} zoom={15} />
                        </div>
                        <p className="footer-map-caption">Get directions to our office</p>
                    </div>

                    {/* Right: Contact */}
                    <div className="footer-section">
                        <h3 className="footer-title">Contact Us</h3>
                        <address className="footer-contact">
                            <p>123 Main Street, Suite 100</p>
                            <p>City, ST 12345</p>
                            <p className="footer-contact-item">
                                <span className="footer-icon">📞</span>
                                <a href="tel:+1234567890" className="footer-link">+1 (234) 567-8900</a>
                            </p>
                            <p className="footer-contact-item">
                                <span className="footer-icon">✉️</span>
                                <a href="mailto:info@anibeat.example" className="footer-link">info@anibeat.example</a>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="footer-social">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="footer-social-icon"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <div className="footer-copyright">
                    &copy; {new Date().getFullYear()} AniBeat. All rights reserved ·{' '}
                    <Link to="/privacy">Privacy and Cookies Policy</Link> |{' '}
                    <Link to="/sales-conditions">Sale Conditions</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer