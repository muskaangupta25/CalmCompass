import React from 'react';
import './Footer.css'; // Import specific styles for Footer component

function Footer() {
    return (
        <div>
            <div className="footer-spacing"></div>
            <footer className="footer">
                <p>© 2024 CalmCompass. All rights reserved.</p>
                <p>
                    <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
                </p>
            </footer>
        </div>
    );
}

export default Footer;
