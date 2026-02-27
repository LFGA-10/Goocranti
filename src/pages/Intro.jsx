import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';

const IntroPage = () => {
    const navigate = useNavigate();

    return (
        <div className="intro-container fade-in-up" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative', overflow: 'hidden' }}>

            {/* Dark Natural Extravagant Background */}
            <div className="app-wallpaper"></div>
            <div className="app-overlay-dark"></div>

            <NavLink to="/signup" style={{ position: 'absolute', top: '2rem', left: '2rem', color: '#84a29f', textDecoration: 'none', fontFamily: 'var(--font-heading)', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s ease', zIndex: 10 }} className="hover-white">
                <span style={{ fontSize: '1.2rem', marginTop: '-2px' }}>←</span> ABORT
            </NavLink>

            <div className="content-wrapper">

                {/* Glowing emblem */}
                <span className="intro-emblem">✦</span>

                <div className="intro-glass-panel">
                    <h2 className="intro-title">INTELLIGENCE AUDIT</h2>
                    <p className="intro-text">
                        We ask a few critical questions to map your strategic foundation. Every architecture is unique, and precise execution demands absolute clarity on your objectives.
                    </p>
                    <p className="intro-text">
                        Your data dictates our response—whether it’s forming an identity, architecting an MVP, or deploying full aggressive strategy—so you are never issued a generic solution.
                    </p>
                    <p className="intro-text last-text">
                        This sequence is brief. It ensures everything proceeding this moment is smarter, faster, and perfectly aligned to your defense.
                    </p>

                    <button
                        onClick={() => navigate('/questionnaire')}
                        className="btn-iconic"
                    >
                        INITIALIZE SEQUENCE →
                    </button>
                </div>
            </div>

            <style>{`
                .intro-container {
                    background: #000;
                }

                .app-wallpaper {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    background-image: url('/images/app_bg.png');
                    background-size: cover; background-position: center; background-repeat: no-repeat;
                    z-index: 0;
                }

                .app-overlay-dark {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    background: linear-gradient(135deg, rgba(2, 17, 16, 0.9) 0%, rgba(0,0,0,0.8) 100%);
                    backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
                    z-index: 1;
                }

                .content-wrapper {
                    position: relative;
                    z-index: 10;
                    max-width: 900px;
                    width: 100%;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .intro-emblem {
                    color: var(--primary-teal);
                    font-size: 3rem;
                    display: block;
                    margin-bottom: 2rem;
                    line-height: 1;
                    animation: pulseOp 3s infinite ease-in-out;
                    filter: drop-shadow(0 0 10px rgba(20, 184, 166, 0.5));
                }

                @keyframes pulseOp {
                    0%, 100% { opacity: 0.5; filter: drop-shadow(0 0 2px rgba(20, 184, 166, 0.2)); }
                    50% { opacity: 1; filter: drop-shadow(0 0 15px rgba(20, 184, 166, 0.8)); }
                }

                .intro-glass-panel {
                    background: rgba(255, 255, 255, 0.02); 
                    backdrop-filter: blur(40px) saturate(150%);
                    -webkit-backdrop-filter: blur(40px) saturate(150%);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 4rem 3rem;
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }

                .intro-title {
                    font-family: var(--font-heading);
                    color: #fff;
                    font-size: 2rem;
                    letter-spacing: 4px;
                    margin-bottom: 2rem;
                    font-weight: 300;
                }

                .intro-text {
                    font-size: 1.25rem;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.8;
                    margin-bottom: 1.5rem;
                    font-weight: 300;
                    text-align: justify;
                }

                .last-text {
                    margin-bottom: 3rem;
                }

                .btn-iconic {
                    background: #fff;
                    color: #000;
                    border: none;
                    padding: 1.2rem 3rem;
                    border-radius: 50px;
                    font-family: var(--font-heading);
                    font-size: 1rem;
                    font-weight: 700;
                    letter-spacing: 2px;
                    cursor: pointer;
                    transition: all 0.3s;
                    box-shadow: 0 10px 30px rgba(255,255,255,0.2);
                    display: inline-block;
                }

                .btn-iconic:hover {
                    transform: translateY(-3px);
                    background: var(--primary-teal);
                    box-shadow: 0 15px 40px rgba(20,184,166,0.4);
                }

                .hover-white:hover {
                    color: #fff !important;
                }

                @media (max-width: 600px) {
                    .intro-glass-panel { padding: 3rem 1.5rem; }
                    .intro-text { font-size: 1.1rem; text-align: left; }
                }
            `}</style>
        </div>
    );
};

export default IntroPage;
