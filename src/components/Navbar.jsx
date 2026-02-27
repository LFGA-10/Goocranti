import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">GOOCRANTI</div>
            <ul className="nav-links">
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>WHAT</NavLink>
                </li>
                <li>
                    <NavLink to="/why" className={({ isActive }) => (isActive ? 'active' : '')}>WHY</NavLink>
                </li>
                <li>
                    <NavLink to="/who" className={({ isActive }) => (isActive ? 'active' : '')}>WHO</NavLink>
                </li>
            </ul>
            <div className="nav-right" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <NavLink to="/signup" className="btn-primary" style={{
                    padding: '0.5rem 1.5rem',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    opacity: scrolled ? 0 : 1,
                    visibility: scrolled ? 'hidden' : 'visible',
                    transition: 'all 0.3s ease',
                    pointerEvents: scrolled ? 'none' : 'auto',
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#fff'
                }}>
                    GET STARTED
                </NavLink>
                <NavLink to="/game" className={({ isActive }) => `user-icon ${isActive ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                    </svg>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
