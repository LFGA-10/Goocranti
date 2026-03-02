import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-top">
            <div className="footer-brand">
                <h3>Build smarter. Protect earlier. <br />Launch stronger.</h3>
                <NavLink to="/schedule" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--primary-teal)', marginBottom: '1.5rem', marginRight: '1rem', color: '#fff', display: 'inline-block', textDecoration: 'none' }}>SCHEDULE</NavLink>
                <NavLink to="/signup" className="btn-primary" style={{ background: 'var(--primary-teal)', border: 'none', color: '#000', display: 'inline-block', textDecoration: 'none' }}>BEGIN THE JOURNEY</NavLink>
                <p className="footer-subtext">Think creatively. Protect what's yours.</p>
            </div>
            <div className="footer-links-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="footer-links">
                    <div className="link-col">
                        <h4>SOLUTIONS</h4>
                        <a href="#">For Startups</a>
                        <a href="#">For Enterprise</a>
                        <a href="#">For Individuals</a>
                        <a href="#">IP Protection</a>
                    </div>
                    <div className="link-col">
                        <h4>PRODUCTS</h4>
                        <a href="#">Shield AI</a>
                        <a href="#">Copyright Nexus</a>
                        <a href="#">Patent Tracker</a>
                        <a href="#">Trademark Sentinel</a>
                    </div>
                    <div className="link-col">
                        <h4>RESOURCES</h4>
                        <a href="#">Case Studies</a>
                        <a href="#">Documentation</a>
                        <a href="#">API Reference</a>
                        <a href="#">Blog</a>
                    </div>
                    <div className="link-col">
                        <h4>COMPANY</h4>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Press</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="footer-newsletter" style={{ gridColumn: 'span 4' }}>
                    <h4>STAY UPDATED</h4>
                    <p style={{ color: '#84a29f' }}>Get the latest insights on IP protection strategies and tools directly to your inbox.</p>
                    <form className="newsletter-form" style={{ maxWidth: '400px' }}>
                        <input type="email" placeholder="Email address" />
                        <button type="submit">→</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="giant-logo">Step Forward</div>
            <div className="copyright">
                <span>© 2026 GOOCRANTI. All rights reserved.</span>
                <span>Privacy Policy | Terms of Service</span>
            </div>
        </div>
    </footer>
);

export default Footer;
