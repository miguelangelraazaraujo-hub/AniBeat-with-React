import "./Footer.css";
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
                            <div className="map-bg"></div>
                            {/* Marcador naranja */}
                            <div className="map-marker"></div>
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
                    <a href="#" aria-label="Facebook" className="footer-social-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.586-1.63 1.195v2.006h2.773l-.443 2.89h-2.33v6.988C20.343 21.128 24 16.991 24 12z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="footer-social-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M23.953 4.568c-.835.37-1.756.576-2.724.576-1.097 0-2.278-.265-3.292-.771 1.017.198 2.278.264 3.292.264.915 0 1.798-.066 2.724-.196-.835.37-1.756.576-2.724.576-1.097 0-2.278-.265-3.292-.771 1.017.198 2.278.264 3.292.264.915 0 1.798-.066 2.724-.196-.835.37-1.756.576-2.724.576-1.097 0-2.278-.265-3.292-.771 1.017.198 2.278.264 3.292.264.915 0 1.798-.066 2.724-.196z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="footer-social-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584 0 4.85.07 3.252.148 4.771 1.691 4.919 4.919.07 1.265.07 1.645.07 4.849 0 3.205 0 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.07-1.645.07-4.85.07-3.205 0-3.584 0-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.07-1.265-.07-1.6447-4.849 0-3.204 0-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.07 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667 0-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.072 1.28-.072 1.688-.072 4.948 0 3.259 0 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.072 1.689.072 4.948.072 3.259 0 3.668 0 4.947-.072 4.354-.2 6.781-2.618 6.979-6.98.073-1.28.073-1.689.073-4.948 0-3.259 0-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.072-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="LinkedIn" className="footer-social-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V5.005h3.414v1.561h.046c1.591-.086 3.048-.029 3.048 1.317v5.668h3.554L20.447 20.452zM5.337 7.933c-1.144 0-2.063-.926-2.063-2.065 0-1.139.92-2.065 2.063-2.065 1.14 0 2.064.926 2.064 2.065 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V5.005h3.564v15.947zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.2 0.792 24 1.771 24h20.451C23.2 24 24 23.2 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>

                {/* Copyright */}
                <div className="footer-copyright">
                    &copy; {new Date().getFullYear()} AniBeat. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer